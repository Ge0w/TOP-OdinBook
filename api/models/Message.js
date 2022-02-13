const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    require: [true, "Please add text"],
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
