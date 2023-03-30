const express = require("express");
const path = require("path");

const routeDir = require("../util/path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "contact.html"));
});

router.post("/success", (req, res, next) => {
  res.send("<h1>Successfull</h1>").redirect("/");
});

module.exports = router;
