import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Offer } from './offer.entity';

import { CreateOfferDTO } from './dto/create-offer.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
  ) {}

  async getOffers(): Promise<Offer[]> {
    const offers = this.offersRepository.find();

    return offers;
  }

  async getOfferById(id: string): Promise<Offer> {
    const foundOffer = await this.offersRepository.findOneBy({ id });

    if (!foundOffer) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }

    return foundOffer;
  }

  async createOffer(
    createOfferDto: CreateOfferDTO,
    user: User,
  ): Promise<Offer> {
    const {
      address,
      area,
      description,
      features,
      photos,
      price,
      propertyType,
      rooms,
    } = createOfferDto;

    const newOffer = this.offersRepository.create({
      address,
      area,
      description,
      features,
      photos,
      price,
      propertyType,
      rooms,
      user,
    });

    await this.offersRepository.save(newOffer);

    return newOffer;
  }

  async deleteOffer(id: string, user: User): Promise<void> {
    const result = await this.offersRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
  }
}
