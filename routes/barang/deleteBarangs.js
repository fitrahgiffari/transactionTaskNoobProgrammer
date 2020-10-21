const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.delete("/barang", (req, res) => {
  let id = req.query;
  const idIsAvailable = db.get("barang", id);

  if (!idIsAvailable) {
    res.status(400).send("You must enter a valid ID");
  } else {
    db.remove("barang", id);
    res.send("your ID has succesfully deleted");
  }
  return;
});

module.exports = app;
