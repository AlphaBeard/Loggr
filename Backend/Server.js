const express = require("express");
const app = express();
const Router = require("./Router");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});
app.use(express.json());

const db = [{ username: "kyle", password: "1234" }];

new Router(app, db);

