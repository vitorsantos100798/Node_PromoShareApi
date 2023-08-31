import { CreateUserType } from "../@types/UserType";
import { UserRepositories } from "../repositories/UserRepositories";
import bcrypt from "bcrypt";
export class CreateUserService {
  async execute({ city, email, password }: CreateUserType) {
    const user = await UserRepositories.findOneBy({ email });

    if (user) {
      return new Error("Usuário já Cadastrado");
    }

    const hash = await bcrypt.hash(password, 8);

    const create = UserRepositories.create({
      city,
      email,
      password: hash,
    });

    await UserRepositories.save(create);

    const { password: _, ...data } = create;
    return data;
  }
}
