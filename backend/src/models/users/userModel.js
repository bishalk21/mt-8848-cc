import userModel from "./userSchema.js";

// insert new user
export const addNewUser = (user) => {
  return userModel(user).save();
};
