const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const stocksDataRoutes = require("./routes/stocksDataRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "https://stock-tracker-frontend-eight.vercel.app", credentials: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/stocks-data", stocksDataRoutes);
app.use("/api/watchlist", watchlistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});