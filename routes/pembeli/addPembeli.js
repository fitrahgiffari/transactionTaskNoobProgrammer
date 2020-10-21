const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.post("/pembeli", (req, res) => {
  const body = req.body;
  const result = db.add("pembeli", body);
  if (!result) {
    res.status(400).send("Wrong body");
  } else {
    res.send(result);
  }
  return;
});

module.exports = app;
