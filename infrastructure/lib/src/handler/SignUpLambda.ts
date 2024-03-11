import { APIGatewayEvent } from "aws-lambda";

export const handler = (e: APIGatewayEvent) => {
  console.log(e);
};
