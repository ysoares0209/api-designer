import { Tags, Resource, Stack } from "aws-cdk-lib";

export default function addAWSApplicationTag(resource: Resource | Stack) {
  Tags.of(resource).add("awsApplication", process.env.AWS_APPLICATION_TAG as string);
}
