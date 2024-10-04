import express from "express";
import { addNewUser, getAllUsers } from "../../models/users/userModel.js";
import upload from "../../utils/upload.js";
import userModel from "../../models/users/userSchema.js";
const router = express.Router();

// user sign-up
router.post(
  "/become-a-member",
  upload.single("image"),
  async (req, res, next) => {
    try {
      let imagePath = "n/a";
      if (req.file) {
        imagePath = req.file.path;
      }

      const user = new userModel({
        ...req.body,
        image: imagePath,
      });

      const result = await addNewUser(user);
      res.status(201).send({
        message: "User registered successfully",
        user: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "User registration failed",
        error: error.message,
      });
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({
      message: "Fetched all players",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Failed to fetch players",
      error: error.message,
    });
  }
});

export default router;
