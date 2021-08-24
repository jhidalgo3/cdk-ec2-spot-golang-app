#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsCdkTrainingStack } from '../lib/aws-cdk-training-stack';

const app = new cdk.App();
new AwsCdkTrainingStack(app, 'cdk-ec2-spot-golang-app', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT
    }
});