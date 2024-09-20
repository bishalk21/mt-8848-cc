import dotenv from "dotenv/config";
import express from "express";
import userRouter from "./router/user/userRouter.js";
import dbConnect from "./config/dbConfig.js";
// const express = require("express"); // CommonJS (node comes with CommonJS)

const app = express();
app.use(express.json()); // parse JSON data

const PORT = process.env.PORT || 8080;

// router
app.use("/api/v1/user", userRouter);

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
