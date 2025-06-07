
const Watchlist = require("../models/Watchlist");

const addToWatchlist = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const newItem = new Watchlist({ ...req.body, userId: req.user.id });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: "Error adding to watchlist" });
  }
};

const getWatchlist = async (req, res) => {
  try {
    const items = await Watchlist.find({ userId: req.user.id });
    res.status(200).json(items);
  } catch (err) {
    console.error("❌ Error in addToWatchlist:", err); 
    res.status(500).json({ message: "Error fetching watchlist" });
  }
};

const deleteFromWatchlist = async (req, res) => {
  try {
    await Watchlist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting item" });
  }
};

module.exports = {
  addToWatchlist,
  getWatchlist,
  deleteFromWatchlist,
};
