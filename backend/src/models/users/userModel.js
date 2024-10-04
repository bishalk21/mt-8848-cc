import userModel from "./userSchema.js";

// insert new user
export const addNewUser = (user) => {
  return userModel(user).save();
};

// get all users
export const getAllUsers = () => {
  return userModel.find();
};
