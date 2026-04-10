const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

// Rate limiting (basic protection)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5 // max 5 requests per IP
});
app.use(limiter);

app.get("/", (req, res) => {
  res.send("OTP API running");
});

app.listen(3000, () => console.log("Server running on port 3000"));