Serverless AWS Lambda
---------------------
Install [Serverless Framework](https://serverless.com/framework/) globally.

Place your AWS Key Id and Secret in `~/.aws/credentials` file and set the environment variable `AWS_PROFILE` accordingly.

Install dependencies: `npm install`.

Run the deploy command in the home directory: `sls deploy`.

A successful deploy will display the corresponding URL.

Ref: https://serverless.com/framework/docs/providers/aws/guide/quick-start/