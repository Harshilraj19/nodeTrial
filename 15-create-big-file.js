const { writeFileSync } = require("fs");

for (i = 0; i < 100000; i++) {
  writeFileSync("./content/bigBIGfile.txt", `whats up ${i} \n`, { flag: "a" });
}
