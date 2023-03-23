const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Satyajeet Namawar");
  console.log(req.url);
  if (req.url == "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Page</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url == "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Page</title></head>");
    res.write("<body><h1>About US</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url == "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Page</title></head>");
    res.write("<body><h1>Welcome TO node js project</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
