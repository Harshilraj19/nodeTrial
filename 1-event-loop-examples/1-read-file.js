const { readFile, writeFile } = require("fs");

console.log("start task");

// if run direct check file path ie ../content

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next immediate task");
