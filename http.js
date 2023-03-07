const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    //res.write();
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short story");
  } else
    res.end(`
    <h1>OOoops!</h1>
    <p> we cant seem to find the page you are looking for </p>
    <a href = "/"> back to home page </a>
    `);
});

server.listen(5000);
