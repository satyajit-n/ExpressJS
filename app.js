const http = require("http");

const routes = require("./routes");

console.log(routes.author)
const server = http.createServer(routes.handler);

server.listen(4000);
