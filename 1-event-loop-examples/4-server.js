const { createServer } = require("http");

const server = createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});

server.listen(5000, () => {
  console.log("listening on port:...5000");
});
