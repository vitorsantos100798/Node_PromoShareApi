import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import dayjs from "dayjs";

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

  @Column({ nullable: true })
  createdAt: string;

  constructor() {
    this.createdAt = dayjs().format("DD/MM/YYYY");
  }
}
