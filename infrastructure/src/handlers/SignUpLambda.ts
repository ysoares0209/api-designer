import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import createDynamoUser from "../services/createDynamoUser";
import createCognitoUser from "../services/createCognitoUser";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || "{}");
    const { userEmail, userPassword } = body;

    const [userId] = await Promise.all([
      createDynamoUser(userEmail),
      createCognitoUser(userEmail, userPassword),
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ userId }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
