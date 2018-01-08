// When the index method is called, this code passes all of the
// arguments it receives to the resolver method (because the
//resolver method needs access to the Subreddit name) and returns
// the data provided by PostResolver.

"use strict";

const GraphQL = require("graphql");
const { GraphQLList, GraphQLString, GraphQLNonNull } = GraphQL;

// import the Post type we created
const PostType = require("../types/Post");

// import the Post resolver we created
const PostResolver = require("../resolvers/Post");

module.exports = {
  index() {
    return {
      type: new GraphQLList(PostType),
      description:
        "This will return all the posts we find in the given subreddit.",
      args: {
        subreddit: {
          type: GraphQLString,
          description: "Please enter subreddit name"
        }
      },
      resolve(parent, args, context, info) {
        return PostResolver.index(args);
      }
    };
  }
};
