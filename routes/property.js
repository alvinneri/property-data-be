const express = require("express");

const router = express.Router();
const PropertyController = require("../controllers/property");

router.get("/properties", PropertyController.getProperties);
router.get("/property/:id", PropertyController.getProperty);

module.exports = router;
