import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
/* Services */
import createDynamoUser from "@services/dynamoDB/createDynamoUser";
import createCognitoUser from "@services/cognito/createCognitoUser";
/* helpers */
import {
  successfulResponse,
  internalServerErrorResponse,
  missingParameterResponse,
} from "@helpers/httpResponses";
import parseBody from "@helpers/parseBody";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = parseBody(event.body);
    const { userEmail, userPassword } = body;
    if (!userEmail) return missingParameterResponse("userEmail");
    if (!userPassword) return missingParameterResponse("userPassword");

    const { userId } = await createCognitoUser(userEmail, userPassword);
    if (!userId) throw new Error("Failed to create user on cognito!");

    await createDynamoUser(userId, userEmail);

    return successfulResponse(201, { userId });
  } catch (error) {
    console.log(error);
    return internalServerErrorResponse();
  }
};
