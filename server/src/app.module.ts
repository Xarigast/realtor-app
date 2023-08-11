import { Module } from '@nestjs/common';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [OffersModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
