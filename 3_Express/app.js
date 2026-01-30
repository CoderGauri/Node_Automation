const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from gauri");
});

app.get("/about", (req, res) => {
  res.send("create impact");
});

app.get("/contact", (req, res) => {
  res.send("contact us");
});

app.listen(3000, () => console.log("port running on 3000"));
