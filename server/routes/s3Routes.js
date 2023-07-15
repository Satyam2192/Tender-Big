const express = require("express");
const router = express.Router();
const s3Controller = require("../controller/s3Controller");
const {verifyToken , isNotUser} = require("../middleware/auth")

//Buy Subscription
router.get("/uploadurl",s3Controller.signS3URL);

module.exports = router;