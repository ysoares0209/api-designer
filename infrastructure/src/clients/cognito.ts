import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

export default new CognitoIdentityProviderClient({
  region: process.env.CDK_DEFAULT_REGION || "us-east-1",
});
