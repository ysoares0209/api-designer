import { CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import { HttpApi as ApiConstructor, CorsHttpMethod } from "aws-cdk-lib/aws-apigatewayv2";

export class HttpApi extends Construct {
  public readonly api: ApiConstructor;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.api = new ApiConstructor(this, "rest-api", {
      apiName: "api-designer",
      description:
        "API to supply REST communication for the web app. Very permissive during testing",
      corsPreflight: {
        allowHeaders: ["*"],
        allowMethods: [CorsHttpMethod.ANY],
        allowOrigins: ["*"],
      },
    });

    new CfnOutput(this, "ApiUrl", {
      value: this.api.url as string,
    });
  }
}
