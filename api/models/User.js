const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
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
  facebookId: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
