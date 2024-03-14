import { APIGatewayProxyResult } from "aws-lambda";

export const successfulResponse = (
  statusCode: 200 | 201 | 204,
  data: Record<string, unknown>,
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(data),
  };
};

export const missingParameterResponse = (missingParameter: string): APIGatewayProxyResult => {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Missing required parameter: " + missingParameter }),
  };
};

export const internalServerErrorResponse = (): APIGatewayProxyResult => {
  return {
    statusCode: 500,
    body: JSON.stringify({ message: "Something went wrong! Try again later!" }),
  };
};
