const express = require("express");
const fs = require("fs");
const { Router } = express;
const router = express.Router();

router.get("/products", (req, res) => {
  let rawData = fs.readFile("./db.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(jsonString).products);
    }
  });
});

router.get("/categories", (req, res) => {
  let rawData = fs.readFile("./db.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(jsonString).categories);
    }
  });
});

module.exports = router;
