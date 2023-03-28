const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In form middleware");
  res.send(
    '<h1>Add Product</h1><form action="/product" method="POST"><input type="text" name="title" placeholder="Product Name"><input type="text" name="size" placeholder="Product size"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express js</h1>");
});

app.listen(4000);
