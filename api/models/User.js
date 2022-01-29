const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
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
    type: Number,
  },
});

module.exports = mongoose.model("User", UserSchema);
