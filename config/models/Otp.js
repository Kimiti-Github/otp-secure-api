const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  identifier: String, // phone/email
  otpHash: String,
  expiresAt: Date,
  attempts: { type: Number, default: 0 }
});

module.exports = mongoose.model("Otp", otpSchema);