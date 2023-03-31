const express = require("express");
const path = require("path");
const routeDir = require("../util/path");
const contactUsController = require('../controllers/contactController')

const router = express.Router();

router.get("/contactus",contactUsController.contactController );

router.post("/success", contactUsController.successController);

module.exports = router;
