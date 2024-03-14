import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
/* Services */
import verifyUserCode from "@services/cognito/verifyUserCode";
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
    const { userEmail, verificationCode } = body;
    if (!userEmail) return missingParameterResponse("userEmail");
    if (!verificationCode) return missingParameterResponse("verificationCode");

    await verifyUserCode(userEmail, verificationCode);
    return successfulResponse(204, {});
  } catch (error) {
    console.log(error);
    return internalServerErrorResponse();
  }
};
