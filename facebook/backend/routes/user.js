const express = require("express");
const router = express.Router();
const { home } = require("../controller/user");
router.get("/user", home);

module.exports = router;
