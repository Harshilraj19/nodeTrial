const { createServer } = require("http");
const { readFileSync, createReadStream } = require("fs");

const server = createServer((req, res) => {
  //event created
  const readWithStream = createReadStream("./content/bigBIGfile.txt", "utf-8");
  //listening for 'open' event
  readWithStream.on("open", () => {
    readWithStream.pipe(res);
  });
  //listening for 'error' event
  readWithStream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(5000, () => {
  console.log("listening on port 5000...");
});
