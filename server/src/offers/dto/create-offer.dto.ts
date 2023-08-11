import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOfferDTO {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  area: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  features: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  photos: number;

  @IsNotEmpty()
  @IsString()
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
