const express = require('express')
const router = express.Router();
const {checkHealth} = require("../Controllers/healthControllers")
router.get("/health",checkHealth)
module.exports = router;