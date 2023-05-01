import { NewPromotionType } from "../@types/NewPromotionType";
import { NewPromotionRepositorie } from "../repositories/NewPromotionRepositorie";

export class NewPromotionService {
  async execute({
    promotion_image,
    city,
    establishment,
    product,
    price,
  }: NewPromotionType) {}
}
