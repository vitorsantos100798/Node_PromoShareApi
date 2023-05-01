import { Request, Response } from "express";
import { LoginService } from "../services/Login";
import { UploadImageS3 } from "../services/UploadImage";
import * as fs from "fs";
export class LoginController {
  async handler(request: Request, response: Response) {
    const ola = "vitor inacio camargo dos santos";
    console.log(ola);

    const data = request.body;
    const login = new LoginService();

    const auth = await login.execute(data);

    if (auth instanceof Error) {
      return response.status(400).json(auth.message);
    }

    return response.json({ ...auth });
  }
}
