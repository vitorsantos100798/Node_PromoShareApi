import { Request, Response } from "express";
import { NewPromotionService } from "../services/NewPromotionService";

export class NewPromotionController {
  async handler(request: Request, response: Response) {
    const data = request.body;
    const promotion = await new NewPromotionService().execute(data);

    if (promotion instanceof Error) {
      return response.status(400).json(promotion.message);
    }

    return response.json({
      message: promotion,
    });
  }
}
