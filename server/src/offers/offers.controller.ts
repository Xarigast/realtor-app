import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { OffersService } from './offers.service';

import { Offer } from './offer.entity';

import { CreateOfferDTO } from './dto/create-offer.dto';

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
  createOffer(@Body() createOfferDto: CreateOfferDTO): Promise<Offer> {
    return this.offersService.createOffer(createOfferDto);
  }

  @Delete('/:id')
  deleteOffer(@Param() id: string): Promise<void> {
    return this.offersService.deleteOffer(id);
  }
}
