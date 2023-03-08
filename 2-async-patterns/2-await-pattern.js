const { readFile, writeFile } = require("fs").promises;

// if . promises is an extension of a module called UTIL
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-async-await.txt",
      `
          This is the latest way : ${first}, ${second}
          `
    );
  } catch (error) {
    console.log(error);
  }
};

start();
