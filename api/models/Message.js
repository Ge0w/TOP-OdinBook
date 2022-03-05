const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    text: {
      type: String,
      require: [true, "Please add text"],
    },
    likes: {
      type: Number,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
