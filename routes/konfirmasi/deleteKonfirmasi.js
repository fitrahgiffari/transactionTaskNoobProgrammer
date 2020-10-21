const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");
const authentication = require("../../middleware/authenticationMiddleware");

app.use(authentication);

app.delete("/konfirmasi", (req, res) => {
  let id = req.query;
  const idIsAvailable = db.get("konfirmasi", id);

  if (!idIsAvailable) {
    res.status(400).send("You must enter a valid ID");
  } else {
    db.remove("konfirmasi", id);
    res.send("your ID has succesfully deleted");
  }
  return;
});

module.exports = app;
