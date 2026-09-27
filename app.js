const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("CI/CD application is running\n");
});

server.listen(3000, () => {
  console.log("Application running on port 3000");
});