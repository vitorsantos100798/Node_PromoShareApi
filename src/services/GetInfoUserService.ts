import { UserRepositories } from "../repositories/UserRepositories";

export class GetInfoUserService {
  async execute(id: string) {
    const userInfo = await UserRepositories.find({
      where: {
        id: id,
      },
    });

    if (!userInfo || userInfo.length === 0) {
      return new Error("Não há Informações do Usuário.");
    }

    const userInfoWithoutSensitiveData = userInfo.map((user) => {
      const { id, password, ...userInfoWithoutIdAndPassword } = user;
      return userInfoWithoutIdAndPassword;
    });

    return userInfoWithoutSensitiveData;
  }
}
