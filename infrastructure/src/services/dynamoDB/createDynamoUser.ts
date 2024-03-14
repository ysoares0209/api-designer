import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

import client from "../../clients/dynamoDB";

export default async function createUser(userId: string, userEmail: string) {
  const tableName = process.env.TABLE_NAME;
  if (!tableName) throw new Error("Table name not found!");

  const user = {
    pk: `USER#${userId}`,
    sk: `USER#${userEmail}`,
    createdAt: new Date().toISOString(),
    type: "user",
  };

  const command = new PutItemCommand({
    TableName: tableName,
    Item: marshall(user),
  });

  await client.send(command);
  return { userId };
}
