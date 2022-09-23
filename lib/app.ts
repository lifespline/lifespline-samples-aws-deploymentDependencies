#!/usr/bin/env node
import { App, Tags } from 'aws-cdk-lib';
// eslint-disable-next-line import/no-unresolved, import/extensions
import SampleStack from './SampleStack';

const app = new App();

const sampleStack = new SampleStack(app, "SampleStack", { });

const tags: [string, string][] = [
  ['sample', 'Deployment Dependencies'],
  ['author', 'lifespline'],
  ['version', '1.0.0-beta'],
  ['src', 'github.com/lifespline/lifespline-samples-aws-deploymentDependencies.git']
];
tags.forEach(([key, value]) => {
  Tags.of(sampleStack).add(key, value);
});
