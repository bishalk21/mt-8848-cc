import "dotenv/config";
import express from "express";
import userRouter from "./router/user/userRouter.js";
import dbConnect from "./config/dbConfig.js";
import path from "path";
import cors from "cors";
// const express = require("express"); // CommonJS (node comes with CommonJS)

const app = express();
app.use(express.json()); // parse JSON data
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); // enable CORS;

// serving static files from the public folder
const __dirname = path.resolve();
app.use("/public", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8080;

// router
app.use("/api/v1/players", userRouter);

// global route handler
app.all("*", (req, res) => {
  res.send("<h1>Welcome to Cricket Club</h1>");
});

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error", error);
  });
