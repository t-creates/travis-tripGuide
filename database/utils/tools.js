import { compare, hash, genSalt } from "bcryptjs";

export const passwordHash = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export const passwordCompare = async (password, hashedPassword) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};