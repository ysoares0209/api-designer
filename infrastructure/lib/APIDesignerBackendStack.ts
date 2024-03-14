import type { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
/* Constructors */
import { HttpApi } from "./constructors/HttpApi";
import { Lambda } from "./constructors/Lambda";
import { Cognito } from "./constructors/Cognito";
import { DynamoDB } from "./constructors/DynamoDB";
/* Utils */
import addDefaultTags from "./utils/addDefaultTags";

export class APIDesignerBackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const { userPool } = new Cognito(this, "UserPool");
    const httpApi = new HttpApi(this, "API");
    const { table } = new DynamoDB(this, "Table");

    // Sign up
    const { function: SignUpLambda } = new Lambda(this, "SignUpLambda", {
      name: "signUpLambda",
      description: "Lambda used to sign up an user",
      entry: "src/handlers/SignUpLambda.ts",
      envs: {
        TABLE_NAME: table.tableName,
        COGNITO_USER_POOL_ID: userPool.userPoolId,
      },
      duration: 5,
    });
    table.grantWriteData(SignUpLambda);

    // Verify code
    const { function: VerifyCodeLambda } = new Lambda(this, "VerifyCodeLambda", {
      name: "verifyCodeLambda",
      description: "Lambda to confirm created user",
      entry: "src/handlers/verifyCodeLambda.ts",
      envs: {
        COGNITO_USER_POOL_ID: userPool.userPoolId,
      },
    });

    // endpoints
    httpApi.addRoute({ path: "/auth/sign-up", method: "POST", lambda: SignUpLambda });
    httpApi.addRoute({ path: "/auth/verify-code", method: "POST", lambda: VerifyCodeLambda });

    addDefaultTags(this);
  }
}
