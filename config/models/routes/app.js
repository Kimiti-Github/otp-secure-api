const connectDB = require("./config/db");
const otpRoutes = require("./routes/otpRoutes");

require("dotenv").config();
connectDB();

app.use("/api", otpRoutes);