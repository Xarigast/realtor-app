import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  area: number;

  @Column()
  description: string;

  @Column()
  features: string;

  @Column()
  photos: number;

  @Column()
  propertyType: string;

  @Column()
  price: number;

  @Column()
  rooms: number;
}
