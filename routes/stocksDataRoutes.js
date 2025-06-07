const express = require("express");
const stocks = require("../stocks.json"); // your gist copy
const router = express.Router();

router.get("/", (req, res) => {
  res.json(stocks);
});

module.exports = router;
