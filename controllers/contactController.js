const routeDir = require("../util/path");
const path = require("path");

exports.contactController = (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "contact.html"));
};

exports.successController = (req, res, next) => {
  res.send("<h1>Successfull</h1>");
};
