import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewPromotion {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  promotion_image: string;

  @Column()
  city: string;

  @Column()
  establishment: string;

  @Column()
  product: string;

  @Column()
  price: string;
}
