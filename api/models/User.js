const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add an username"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profileDes: {
    type: String,
  },
  age: {
    type: Number,
    min: [12, "Must be 12 or older"],
  },
  friends: {
    type: Array,
  },
  facebookId: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
