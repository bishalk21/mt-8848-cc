import express from "express";
import { addNewUser } from "../../models/users/userModel.js";
const router = express.Router();

// user sign-up
router.post("/signup", async (req, res, next) => {
  try {
    const user = req.body;
    const result = await addNewUser(user);
    res.status(201).send({
      message: "User Created Successfully",
      user: result,
    });
  } catch (error) {
    res.status(500).send("Error saving user:" + error.message);
  }
});

export default router;
