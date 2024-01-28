import { Request, Response } from "express";
import { GetCupons } from "../utils/getCupons";

export class GetCuponsController {
  async execute(req: Request, res: Response) {
    return res.status(200).json(GetCupons);
  }
}
