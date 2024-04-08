const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: {
    type: String,
    default: null,
  },
  status: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("message", MessageSchema);
