import { Request, Response } from "express";
import { NewPromotionService } from "../services/NewPromotionService";

export class NewPromotionController {
  async handler(request: Request, response: Response) {
    const data = request.body;
    const promotion = new NewPromotionService();
  }
}
