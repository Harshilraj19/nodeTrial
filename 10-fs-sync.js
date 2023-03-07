const { readFileSync, writeFileSync } = require("fs");
// by destructuring you can assess properties and methods
//directly with out the need to eg
//const fe = require('fe');
//const first = fe.readFileSync('./content/first.txt')

// reading file

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
//console.log(first, second);

//writing to a file
// if file there then node will overide.
//If file not there then node will CREATE it
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
