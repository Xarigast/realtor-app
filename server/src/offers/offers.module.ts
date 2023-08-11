import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';

import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';

import { Offer } from './offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offer]), AuthModule],
  providers: [OffersService],
  controllers: [OffersController],
})
export class OffersModule {}
