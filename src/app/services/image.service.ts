import { Injectable } from "@angular/core";
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class ImageService {

  FOLDER = 'ports';
  BUCKET = 'lokeshphotos';

  constructor() {}

  //access s3 bucket
  public getS3Bucket(): any {
    const bucket = new S3(
      {
        accessKeyId: 'AKIA454CMKD2HRYBBDQC',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    return bucket;
  }

  getFiles(folder : String): any {
    const fileUploads = new Array();

    const params = {
      Bucket: this.BUCKET,
      Prefix: folder
    };

    this.getS3Bucket().listObjects(params, function(err: string,data: any){
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }

      console.log('Successfully get files.', data);

      const fileDatas = data.Contents;

      return fileDatas

    })
  }
}