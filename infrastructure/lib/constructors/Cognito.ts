import { Construct } from "constructs";
import { Duration, RemovalPolicy } from "aws-cdk-lib";
import {
  UserPool,
  UserPoolClient,
  VerificationEmailStyle,
  AccountRecovery,
} from "aws-cdk-lib/aws-cognito";
/* Utils */
import addAWSApplicationTag from "../utils/addAWSApplicationTag";

export class Cognito extends Construct {
  public readonly userPool: UserPool;
  public readonly client: UserPoolClient;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.userPool = new UserPool(this, "userPool", {
      signInCaseSensitive: false,
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "Verify your email",
        emailBody: "Thanks for signing up to api-designer! Your verification code is {####}",
        emailStyle: VerificationEmailStyle.CODE,
      },
      signInAliases: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      accountRecovery: AccountRecovery.EMAIL_ONLY,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    addAWSApplicationTag(this.userPool);
    addAWSApplicationTag(this.client);
  }
}
