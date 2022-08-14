const express = require("express");

const path = require("path");
const logger = require("morgan");

const app = express();
app.use(express.json());

//set path to serve from build folder
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
