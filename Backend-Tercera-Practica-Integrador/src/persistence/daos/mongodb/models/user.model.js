import mongoose from "mongoose";
import { isPremium } from "../../../../middlewares/isPremium";

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  isGithub: {
    type: Boolean,
    required: true,
    default: false,
  },
  isGoogle: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPremium: {
    type: Boolean,
    require: true,
    default: false,
  },
});
const userColl = "users";
export const UserModel = mongoose.model(userColl, usersSchema);
