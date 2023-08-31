import { Request, Response } from "express";
import { BrazilCitiesSp } from "../utils/BrazilCities";

export class GetCitiesController {
  async execute(req: Request, res: Response) {
    return res.status(200).json(BrazilCitiesSp);
  }
}
