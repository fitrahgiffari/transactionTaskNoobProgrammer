const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.get("/konfirmasi", (req, res) => {
  console.log(req.query);
  const result = db.get("konfirmasi", req.query);
  res.send(result);
});

module.exports = app;
