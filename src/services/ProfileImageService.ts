import { ImageProfileType } from "../@types/ImageProfile";
import { UserRepositories } from "../repositories/UserRepositories";
import { UploadImageS3 } from "../utils/UploadImage";

export class ProfileImageService {
  async execute({ id, imageProfile }: ImageProfileType) {
    const user = await UserRepositories.findOneBy({ id });

    const uploadImageUser = await new UploadImageS3().handler(imageProfile, id);

    if (!uploadImageUser || uploadImageUser == "") {
      return new Error("Ops! Algo deu errado ao atualizar sua foto de perfil.");
    }

    if (user) {
      user.profileImage = uploadImageUser;
      await UserRepositories.save(user);
    }

    return uploadImageUser;
  }
}
