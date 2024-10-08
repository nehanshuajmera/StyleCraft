import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { storyRoutes } from "./routes/storyRoute.js";
import { tourRoutes } from "./routes/tourRoute.js";
import { bookingRoutes } from "./routes/bookingRoute.js";

const PORT = process.env.PORT;

const app = express();

// CORS options based on environment
const corsOptions = {
  origin: ["https://leafytrails.netlify.app", "http://localhost:5173"],
  credentials: true, // Allow credentials such as cookies to be sent
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static("./public"));

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Backend Working, Happy Coding");
});

app.use("/api/stories", storyRoutes);
app.use("/api/tours", tourRoutes);
app.use('/api/booking', bookingRoutes);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to Database");

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`Error connecting to the database: ${err.message}`);
    throw new Error(`Error connecting to the database: ${err.message}`);
  }
};

connect();

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
