import User from "../models/user.model";

export const userExists = async (email) => {
  const checkUser = await User.findOne({ email: email });
  if (checkUser) return true;
  return false;
};

export const findUserByEmail = async (email, select) => {
  const user = await User.findOne({ email: email }).select(select);
  return user;
};