const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Otp = require("../models/Otp");

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Request OTP
router.post("/request-otp", async (req, res) => {
  const { identifier } = req.body;

  const otp = generateOTP();
  const otpHash = await bcrypt.hash(otp, 10);

  const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

  await Otp.create({ identifier, otpHash, expiresAt });

  console.log("OTP (for testing):", otp);

  res.json({ message: "OTP sent" });
});

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { identifier, otp } = req.body;

  const record = await Otp.findOne({ identifier });

  if (!record) return res.status(400).json({ error: "No OTP found" });

  if (record.expiresAt < new Date())
    return res.status(400).json({ error: "OTP expired" });

  if (record.attempts >= 5)
    return res.status(403).json({ error: "Too many attempts" });

  const isMatch = await bcrypt.compare(otp, record.otpHash);

  if (!isMatch) {
    record.attempts += 1;
    await record.save();
    return res.status(400).json({ error: "Invalid OTP" });
  }

  res.json({ message: "OTP verified" });
});

module.exports = router;