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
      // Se a exclusão for bem-sucedida, você pode retornar true ou outra indicação de sucesso.
      return true;
    } catch (error) {
      // Se ocorrer um erro, você pode tratá-lo e retornar false ou lançar uma exceção, conforme necessário.
      console.error("Erro ao excluir imagem do S3:", error);
      return false;
    }
  }
}
