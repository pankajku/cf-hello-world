Azure Cloud Function
--------------------
I couldn't package and deploy to Azure with Serverless Framework. Ref: https://github.com/serverless/serverless-azure-functions/issues/128

Follow the instructions at <https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function> to create a Function App resource with Node as the Runtime Stack. Copy-Paste the function code from [index.js](./index.js) source file. You would also need to install `uuid` module by running `npm install uuid` in the commandline console.

Get the URL of the function by clicking on `Get Function URL` link on the portal.