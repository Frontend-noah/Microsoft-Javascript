// npm init

// dependencies
// npm install

// devDependencies
// npm install --save dev

// npm install express
// npm install --save dotenv

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
