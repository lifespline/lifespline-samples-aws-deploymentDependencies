import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * The sample stack deploys a lambda, an S3 bucket and an IAM role enabling the 
 * lambda to list the S3 bucket.
 * 
 * @extends Stack
 */
class SampleStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
    }
  }
  
  export default SampleStack;
  