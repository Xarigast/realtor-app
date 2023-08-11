import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from 'src/auth/user.entity';

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

  @ManyToOne(() => User, (user) => user.offers, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
