import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export default new DynamoDBClient({
  region: process.env.CDK_DEFAULT_REGION || "us-east-1",
});
