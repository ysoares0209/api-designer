import { Construct } from "constructs";
import { Duration } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

interface Props {
  name: string;
  description: string;
  entry: string;
  duration?: number;
}

export class Lambda extends Construct {
  public readonly function: NodejsFunction;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);

    const { name, description, entry, duration } = props;
    this.function = new NodejsFunction(this, "Function", {
      functionName: name,
      description,
      entry,
      handler: "handler",
      runtime: Runtime.NODEJS_20_X,
      logRetention: RetentionDays.ONE_WEEK,
      timeout: Duration.seconds(duration || 3),
    });
  }
}
