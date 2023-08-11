import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOfferDTO {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  area: number;

  @IsNotEmpty()
  description: string;

  features: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  photos: number;

  @IsNotEmpty()
  propertyType: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  rooms: number;
}
