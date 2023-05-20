import { Request, Response } from "express";
import { GetPromotionService } from "../services/GetPromotionService";

export class GetPromotionController {
  async execute(req: Request, res: Response) {
    const data = req.params.city;
    const service = await new GetPromotionService().find(data);

    if (service instanceof Error) {
      return res.status(404).json({
        error: service.message,
      });
    }

    return res.status(200).json(service);
  }
}
