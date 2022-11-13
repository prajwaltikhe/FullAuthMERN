const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/deivpnmqz/image/upload/v1667496021/avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
