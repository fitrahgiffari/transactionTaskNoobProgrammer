const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.get("/barang", (req, res) => {
  const result = db.get("barang", req.query);
  res.send(result);
});

module.exports = app;
