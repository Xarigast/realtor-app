import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { OffersService } from './offers.service';

import { Offer } from './offer.entity';
import { User } from 'src/auth/user.entity';

import { CreateOfferDTO } from './dto/create-offer.dto';

import { GetUser } from 'src/auth/decorators/get-user.decorator';

@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  getOffers(): Promise<Offer[]> {
    return this.offersService.getOffers();
  }

  @Get('/:id')
  getOfferById(@Param('id') id: string): Promise<Offer> {
    return this.offersService.getOfferById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  createOffer(
    @Body() createOfferDto: CreateOfferDTO,
    @GetUser() user: User,
  ): Promise<Offer> {
    return this.offersService.createOffer(createOfferDto, user);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  deleteOffer(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.offersService.deleteOffer(id, user);
  }
}
