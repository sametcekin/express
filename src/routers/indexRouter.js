const express = require("express");
const fs = require("fs");
const { Router } = express;
const router = express.Router();

router.get("/products", (req, res) => {
  const paramCategory = req.query.categoryId;

  fs.readFile("./db.json", "utf-8", (err, jsonString) => {
    var result = JSON.parse(jsonString).products;
    if (paramCategory) {
      result = result.filter((x) => x.categoryId == paramCategory);
    }
    res.send(result);
  });
});

router.get("/categories", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(jsonString).categories);
    }
  });});

module.exports = router;
