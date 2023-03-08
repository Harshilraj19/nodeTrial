const http = require("http");

// const server = http.createServer((req, res)=>{ res.end('welcome')})

//INSTEAD USE EVENT EMMITER API- no call back
const server = http.createServer();
//this EMITS Request event

// use on to listen  request and callback is the (req,res)
server.on("request", (req, res) => {
  res.end("this also works");
});

// listen
server.listen(5000, () => {
  console.log("listening on 5000");
});
