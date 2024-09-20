import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
      maxLength: [20, "First Name can't be longer than 20 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
      maxLength: [20, "Last Name can't be longer than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      index: 1,
      maxLength: [20, "Email can't be more than 20 characters'"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Password must be at least 6 characters long"],
    },
    mobile: {
      type: String,
      maxLength: [20, "Phone number can't be more than 20 characters'"],
    },
    address: {
      type: String,
      maxLength: [20, "Address can't be more than 20 characters'"],
      default: "n/a",
    },
    dob: {
      type: Date,
    },
    emailValidateCode: {
      type: String,
      default: "",
    },
    playingPosition: {
      type: String,
      default: "n/a",
    },
    interest: {
      type: String,
      default: "n/a",
    },
    refreshJWT: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
