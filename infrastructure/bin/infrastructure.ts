#!/usr/bin/env node
import "source-map-support/register";
import { config } from "dotenv";
config();

import * as cdk from "aws-cdk-lib";
import { APIDesignerBackendStack } from "../lib/APIDesignerBackendStack";

const app = new cdk.App();
new APIDesignerBackendStack(app, "APIDesignerBackendStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
