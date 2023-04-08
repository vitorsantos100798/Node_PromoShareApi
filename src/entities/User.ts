import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RefleshToken } from "./RefleshToken";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  city: string;

  @OneToMany(() => RefleshToken, (type) => type.user)
  token_user?: RefleshToken[];
}
