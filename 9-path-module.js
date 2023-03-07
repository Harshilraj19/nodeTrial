const path = require("path");
//path separator
console.log(path.sep);

// joining paths
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//getting base from path
const base = path.basename(filePath);
console.log(base);

//absolute path to directory where app.js is
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
