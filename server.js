const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.get("/registration.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/dist/src/pages/registration/registration.html")
  );
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/src/pages/login/login.html"));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
