import { Request, Response } from "express";
import { ProfileImageService } from "../services/ProfileImageService";

export class ProfileImageController {
  async handler(request: Request, response: Response) {
    const data = request.body;
    const serviceImageProfile = new ProfileImageService();

    const user = await serviceImageProfile.execute(data);

    if (user instanceof Error) {
      return response.status(400).json(user.message);
    }

    return response.json(user);
  }
}
