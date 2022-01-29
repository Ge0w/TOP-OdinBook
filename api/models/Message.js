const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  c: {
    type: String,
  },
  message: {
    type: String,
    require: [true, "Please add text"],
  },
  likes: {
    type: Number,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
