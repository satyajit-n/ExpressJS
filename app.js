const http = require("http");

const server = http.createServer((req, res) => {
  console.log('Satyajeet Namawar');
});

server.listen(4000);
