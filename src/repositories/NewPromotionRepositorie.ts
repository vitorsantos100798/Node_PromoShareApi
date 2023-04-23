import { AppDataSource } from "../data-source";
import { NewPromotion } from "../entities/NewPromotion";

export const NewPromotionRepositorie =
  AppDataSource.getRepository(NewPromotion);
