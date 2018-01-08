// This file requires the aws-serverless-express package that we just
// installed. This is the package that makes it easier for us to
// use express with AWS Lambda.

"use strict";

const awsServerlessExpress = require("aws-serverless-express");
const app = require("./src/app");
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
