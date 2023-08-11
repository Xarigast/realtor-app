import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';

import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(
    authCredentialsDto: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;

    const user = await this.usersRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };

      const accessToken: string = await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      });

      return { accessToken };
    } else {
      throw new UnauthorizedException('Incorrect login or password.');
    }
  }

  async signUp(
    authCredentialsDto: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    try {
      await this.usersRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username is already taken.');
      } else {
        throw new InternalServerErrorException();
      }
    }

    return this.signIn(authCredentialsDto);
  }
}
