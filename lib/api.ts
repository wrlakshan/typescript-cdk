import { aws_lambda_nodejs as lambda } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import path from "path";

export interface DocumentManagementAPIProps {
  s3: S3.IS3;
}

export class DocumentManagementAPI extends Construct {
  constructor(scope: Construct, id: string, props: DocumentManagementAPIProps) {
    super(scope, id);

    const getDocumentsFunction = new lambda.NodejsFunction(this, "GetDocumentsFunction", {
      runtime: Runtime.NODEJS_20_X,
      entry: path.join(__dirname, "..", "api", "getDocuments", "index.ts"),
      handler: "getDocuments",
      externalModules: ["aws-sdk"],
    });
  }
}

// create api , complete the function and create upload file default to s3 ,then api gateway give the signurl for that request file
