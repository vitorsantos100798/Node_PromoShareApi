import AWS from "aws-sdk";
import { bucketConfig } from "../config/awsSdkConfig";

export class UploadImageS3 {
  async handler(imageString: string, filename: string): Promise<string> {
    const s3 = new AWS.S3({
      accessKeyId: bucketConfig.Aws_Acess_Key,
      secretAccessKey: bucketConfig.Aws_Secret_Key,
      region: bucketConfig.Aws_Bucket_Region,
    });
    console.log(filename);

    const params = {
      Bucket: bucketConfig.Aws_Bucket_Name,
      Key: filename,
      Body: Buffer.from(imageString, "base64"),
      ContentType: "image/jpeg",
    };

    return s3
      .upload(params)
      .promise()
      .then((result) => result.Location)
      .catch((error) => Promise.reject(error));
  }
}
