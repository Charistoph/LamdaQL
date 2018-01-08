// Here, we’re just requiring the dependencies that we installed
// earlier: Express, body-parser, express-GraphQL and also the
// GraphQL Schema that we just created.

"use strict";

const express = require("express");
const body_parser = require("body-parser");

const expressGraphQL = require("express-graphql");

// let's import the schema file we just created
const GraphQLSchema = require("./graphql/schema");

const app = express();

app.use(body_parser.json({ limit: "50mb" }));

app.use(
  "/",
  expressGraphQL(() => {
    return {
      graphiql: true,
      schema: GraphQLSchema
    };
  })
);

module.exports = app;
