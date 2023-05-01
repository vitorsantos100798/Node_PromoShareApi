import { Request, Response } from "express";
import { UploadImageS3 } from "../services/UploadImage";
import * as fs from "fs";

export class Image {
  async handler(req: Request, res: Response) {
    const imageData = fs.readFileSync("./src/assets/teste.jpg");
    const imageString = imageData.toString("base64");
    const upload = new UploadImageS3();

    const imageUrl = await upload.handler(imageString, "javascript");

    console.log("Teste Upload", imageUrl);

    return res.send("Ok vitor");
  }
}
