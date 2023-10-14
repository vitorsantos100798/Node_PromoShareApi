import AWS from "aws-sdk";
import { bucketConfig } from "../config/awsSdkConfig";

export class DeleteImageFromS3 {
  async handler(filename: string): Promise<boolean> {
    const s3 = new AWS.S3({
      accessKeyId: bucketConfig.Aws_Acess_Key,
      secretAccessKey: bucketConfig.Aws_Secret_Key,
      region: bucketConfig.Aws_Bucket_Region,
    });

    const params = {
      Bucket: bucketConfig.Aws_Bucket_Name,
      Key: filename,
    };

    try {
      await s3.deleteObject(params).promise();
      return true;
    } catch (error) {
      console.error("Erro ao excluir imagem do S3:", error);
      return false;
    }
  }
}
