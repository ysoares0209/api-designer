import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";
import { TableV2, AttributeType, Billing } from "aws-cdk-lib/aws-dynamodb";

export class DynamoDB extends Construct {
  public readonly table: TableV2;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new TableV2(this, "DynamoDB", {
      partitionKey: { name: "pk", type: AttributeType.STRING },
      sortKey: { name: "sk", type: AttributeType.STRING },
      billing: Billing.onDemand(),
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
