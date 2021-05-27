const express = require("express");
const router = express.Router();
const connectDb = require("./db/connection");

connectDb();

const propertyRoute = require("./routes/property");

// @mounts
router.use("/api/v1/public", propertyRoute);

module.exports = router;
