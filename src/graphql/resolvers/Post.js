// This file exports a very simple JavaScript object. The index
// method on the PostsController object returns a promise (which
// GraphQL accepts).

"use strict";

const axios = require("axios");

const PostsController = {
  index: args => {
    const URL = `https://www.reddit.com/r/${args.subreddit ||
      "javascript"}.json`;

    return axios
      .get(URL)
      .then(response => {
        const __posts = [];
        const posts = response.data.data.children;

        posts.map(post => {
          post.data.content = post.data.selftext_html;
          __posts.push(post.data);
        });
        return __posts;
      })
      .catch(error => {
        return { error: error };
      });
  }
};

module.exports = PostsController;
