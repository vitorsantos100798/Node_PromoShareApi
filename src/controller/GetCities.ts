import { Request, Response } from "express";
import { BrazilCitiesSp } from "../utils/BrazilCities";

export class GetCitiesController {
  async execute(req: Request, res: Response) {
    const NewJson = BrazilCitiesSp.cidades.map((cidade, index) => ({
      Nome: cidade,
      Id: index,
    }));

    return res.status(200).json(NewJson);
  }
}
