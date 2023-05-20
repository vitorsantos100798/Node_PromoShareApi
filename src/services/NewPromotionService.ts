import { NewPromotionType } from "../@types/NewPromotionType";
import { NewPromotionRepositorie } from "../repositories/NewPromotionRepositorie";
import { UploadImageS3 } from "../utils/UploadImage";
export class NewPromotionService {
  async execute({
    imagePromotion,
    city,
    nameSupermarketing,
    nameProduct,
    price,
  }: NewPromotionType) {
    const uploadImage = await new UploadImageS3().handler(
      imagePromotion,
      nameProduct
    );

    if (!uploadImage || uploadImage == "") {
      return new Error("Upload de imagem falhou");
    }

    const create = await NewPromotionRepositorie.create({
      city,
      establishment: nameSupermarketing,
      product: nameProduct,
      price,
      promotion_image: uploadImage,
    });
    await NewPromotionRepositorie.save(create);
    const response = {
      message: "Promoção criada com sucesso",
    };
    return response;
  }
}
