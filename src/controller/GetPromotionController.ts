import { Request, Response } from "express";
import { GetPromotionService } from "../services/GetPromotionService";

export class GetPromotionController {
  async execute(req: Request, res: Response) {
    const cityParam = req.query.city;

    if (!cityParam) {
      return res.status(400).json({
        error: "O parâmetro 'city' é obrigatório na consulta.",
      });
    }

    const city = String(cityParam);

    const service = await new GetPromotionService().find(city);

    if (service instanceof Error) {
      return res.status(404).json({
        error: service.message,
      });
    }

    return res.status(200).json(service);
  }
}
