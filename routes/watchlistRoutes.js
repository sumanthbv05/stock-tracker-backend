
const express = require("express");
const router = express.Router();
const { addToWatchlist, getWatchlist, deleteFromWatchlist } = require("../controllers/watchlistController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, addToWatchlist);
router.get("/", verifyToken, getWatchlist);
router.delete("/:id", verifyToken, deleteFromWatchlist);

module.exports = router;
