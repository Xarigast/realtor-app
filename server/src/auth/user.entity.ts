import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Offer } from 'src/offers/offer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Offer, (offer) => offer.user, { eager: true })
  offers: Offer[];
}
