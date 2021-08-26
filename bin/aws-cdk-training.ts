#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsCdkTrainingStack } from '../lib/aws-cdk-training-stack';
import { CdkUsingVpcDefault  } from '../lib/cdk-using-vpc-default';

const app = new cdk.App();
const cdkGolangApp = new AwsCdkTrainingStack(app, 'cdk-ec2-spot-golang-app', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT
    }
});

const cdkUsingVpc = new CdkUsingVpcDefault(app, 'cdk-ec2-spot-golang-app-using-vpc-default', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT
    }
});

app.synth()