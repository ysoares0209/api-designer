import { Stack, StackProps } from "aws-cdk-lib";
import type { Construct } from "constructs";

import { HttpApi } from "./constructors/HttpApi";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const { api } = new HttpApi(this, "API");
  }
}
