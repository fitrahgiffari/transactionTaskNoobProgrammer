const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.patch("/penjual", (req, res) => {
  const body = req.body;
  const id = req.query.id;

  const result = db.edit("penjual", id, body);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("stop");
  }
});

module.exports = app;
