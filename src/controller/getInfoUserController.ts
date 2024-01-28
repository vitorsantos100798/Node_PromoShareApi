import { Request, Response } from "express";
import { GetInfoUserService } from "../services/GetInfoUserService";

export class GetInfoUserController {
  async execute(req: Request, res: Response) {
    const user = req.query.id;

    if (!user) {
      return res.status(400).json({
        error: "O parâmetro 'user' é obrigatório na consulta.",
      });
    }

    const service = await new GetInfoUserService().execute(String(user));

    if (service instanceof Error) {
      return res.status(404).json({
        error: service.message,
      });
    }

    return res.status(200).json(service);
  }
}
