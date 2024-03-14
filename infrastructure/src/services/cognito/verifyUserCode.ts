import {
  ConfirmSignUpCommand,
  ConfirmSignUpCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import client from "@clients/cognito";

export default async function verifyUserCode(email: string, code: string) {
  const clientId = process.env.COGNITO_CLIENT_ID;
  if (!clientId) throw new Error("Client id not found!");

  const signUpParams: ConfirmSignUpCommandInput = {
    ClientId: process.env.COGNITO_POOL_CLIENT_ID,
    ConfirmationCode: code,
    Username: email,
  };

  const signUpCommand = new ConfirmSignUpCommand(signUpParams);
  await client.send(signUpCommand);
}
