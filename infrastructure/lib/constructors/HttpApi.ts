import { CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import {
  HttpApi as ApiConstructor,
  CorsHttpMethod,
  HttpMethod,
} from "aws-cdk-lib/aws-apigatewayv2";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

interface AddRouteProps {
  path: string;
  lambda: NodejsFunction;
  method: "POST" | "PUT" | "GET" | "DELETE";
}

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

  addRoute(props: AddRouteProps) {
    const { path, method, lambda } = props;

    const methodMapper = {
      ["POST"]: HttpMethod.POST,
      ["PUT"]: HttpMethod.PUT,
      ["GET"]: HttpMethod.GET,
      ["DELETE"]: HttpMethod.DELETE,
    };

    this.api.addRoutes({
      path,
      methods: [methodMapper[method]],
      integration: new HttpLambdaIntegration(`${method}-${path}`, lambda),
    });
  }
}
