import type { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";

import { HttpApi } from "./constructors/HttpApi";
import { Lambda } from "./constructors/Lambda";
import { Cognito } from "./constructors/Cognito";
import { DynamoDB } from "./constructors/DynamoDB";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const { userPool, client } = new Cognito(this, "UserPool");
    const { api } = new HttpApi(this, "API");
    const { table } = new DynamoDB(this, "Table");

    // Sign up endpoint
    const { function: SignUpLambda } = new Lambda(this, "SignUpLambda", {
      name: "signUpLambda",
      description: "Lambda used to sign up an user",
      entry: "src/handlers/SignUpLambda.ts",
      envs: {
        TABLE_NAME: table.tableName,
        COGNITO_USER_POOL_ID: userPool.userPoolId,
        COGNITO_CLIENT_ID: client.userPoolClientId,
      },
      duration: 5,
    });
    table.grantWriteData(SignUpLambda);

    // endpoints
    const SignUpLambdaIntegration = new HttpLambdaIntegration(
      "SignUpLambdaIntegration",
      SignUpLambda,
    );
    api.addRoutes({
      path: "/sign-up",
      methods: [HttpMethod.POST],
      integration: SignUpLambdaIntegration,
    });
  }
}
