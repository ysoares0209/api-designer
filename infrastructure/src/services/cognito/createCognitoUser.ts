import { SignUpCommand, SignUpCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import client from "@clients/cognito";

export default async function createCognitoUser(email: string, password: string) {
  const clientId = process.env.COGNITO_CLIENT_ID;
  if (!clientId) throw new Error("Client id not found!");

  const signUpParams: SignUpCommandInput = {
    ClientId: clientId,
    Username: email,
    Password: password,
  };

  const signUpCommand = new SignUpCommand(signUpParams);
  const response = await client.send(signUpCommand);

  return { userId: response.UserSub };
}
