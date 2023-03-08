const http = require("http");

// you would think home and error page would execute
//but no, they wait for about to finish as well
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //BLOCKING CODE
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error page");
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
