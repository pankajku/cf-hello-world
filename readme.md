Cloud Functions
---------------
This code repo is companion to the blog post [Poor Resource Utilization by AWS Serverless Lambdas And How It Impacts Your Applications](https://pankajku.github.io/blog/2018/11/02/poor-resource-utilization-by-aws-serverless-lambdas).
Sub-directories contain simple HelloWorld cloud functions for a number of Clouds environments:

* [AWS Serverless Lambda](./aws-hello)
* [Google Cloud Function](./gcloud-hello)
* [Azure Cloud Function](./azure-hello)
* [Kubeless Cloud Function](./kubeless-hello)
* [Local Server Function](./node-hello)

The cloud function can be invoked by issuing HTTP GET on the corresponding URL: `curl <url>`.

Use the script [`mstime.sh`](./mstime.sh) to append elapsed time in milliseconds to the function output: `./mstime.sh curl <url>`.
