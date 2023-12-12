const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mail: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
},{
  timestamps:true
});

module.exports = mongoose.model("user", userSchema);
