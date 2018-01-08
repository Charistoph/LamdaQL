// This is a very simple express server. It runs at the port we
// specified and includes the app object we exported from the file
// src/app.js .

// Since our server has been set up, we can now test our
// application by running the command node server.js . You should
// see the URL where our server is running.

"use strict";

const app = require("./src/app");

// let's set the port on which the server will run
app.set("port", 1337);

// start the server
app.listen(app.get("port"), () => {
  const port = app.get("port");
  console.log("GraphQL Server Running at http://127.0.0.1:" + port);
});
