const { createReadStream } = require("fs");

//AFTER path pass in object with HighWaterMark = set buffer size, encoding to utf-8
const stream = createReadStream("./content/bigBIGfile.txt", {
  highWaterMark: 9000,
  encoding: "utf8",
});
// data read in chunks of 64 kb
//last buffer is remainder

//listening for 'data'
stream.on("data", (chunkResult) => {
  console.log(chunkResult);
});

//listening for 'error'
stream.on("error", (err) => {
  console.log(err);
});
