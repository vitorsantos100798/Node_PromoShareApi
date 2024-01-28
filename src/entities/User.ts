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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  profileImage: string;

  @OneToMany(() => RefleshToken, (type) => type.user)
  token_user?: RefleshToken[];
}
