import { Construct } from "constructs";
import { Duration } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
/* Utils */
import addAWSApplicationTag from "../utils/addAWSApplicationTag";

interface Props {
  name: string;
  description: string;
  entry: string;
  envs: Record<string, string>;
  duration?: number;
}

export class Lambda extends Construct {
  public readonly function: NodejsFunction;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id);

    const { name, description, entry, envs, duration } = props;
    this.function = new NodejsFunction(this, "Function", {
      functionName: name,
      description,
      entry,
      handler: "handler",
      environment: envs,
      runtime: Runtime.NODEJS_20_X,
      logRetention: RetentionDays.ONE_WEEK,
      timeout: Duration.seconds(duration || 3),
    });

    addAWSApplicationTag(this.function);
  }
}
