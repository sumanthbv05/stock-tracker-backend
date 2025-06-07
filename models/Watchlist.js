const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String },
  price: { type: Number },
  status: { type: String }, // "up" or "down"
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
