import * as cdk from "aws-cdk-lib";
import { aws_s3 as s3 } from "aws-cdk-lib";
import { Construct } from "constructs";

export class TypescriptCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "DocumentsBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    new cdk.CfnOutput(this, "DocumentsBucketNameExports", {
      value: bucket.bucketName,
      exportName: "DocumentsBucketName",
    });
  }
}
