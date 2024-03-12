import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";

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
      entry: "src/handlers/signUpLambda.ts",
      duration: 5,
    });
  }
}
