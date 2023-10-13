import { ImageProfileType } from "../@types/ImageProfile";
import { UserRepositories } from "../repositories/UserRepositories";

import { UploadImageS3 } from "../utils/UploadImage";
import { DeleteImageFromS3 } from "../utils/DeleteImageFromS3";

export class ProfileImageService {
  async execute({ id, imageProfile }: ImageProfileType) {
    const user = await UserRepositories.findOneBy({ id });

    // const Upload = await new UploadImageS3().handler(imageProfile, id);

    // console.log("DEBUG", Upload);

    // if (user) {
    //   user.profileImage = Upload;
    //   await UserRepositories.save(user);
    // }

    return "ola";
  }
}
