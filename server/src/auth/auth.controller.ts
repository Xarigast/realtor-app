import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  signUp(
    @Body() authCredentialsDto: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/sign-in')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
