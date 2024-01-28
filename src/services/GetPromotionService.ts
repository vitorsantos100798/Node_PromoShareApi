import { NewPromotionRepositorie } from "../repositories/NewPromotionRepositorie";

export class GetPromotionService {
  async find(city: string) {
    const find = await NewPromotionRepositorie.find({
      where: {
        city: city,
      },
    });
    if (!find || find.length == 0) {
      return new Error("Sua Cidade não Possui Promoções Ativas.");
    }
    const reverseDataFetchArray = find.reverse();
    return reverseDataFetchArray;
  }
}
