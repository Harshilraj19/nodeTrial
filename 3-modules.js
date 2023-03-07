//CommonJS - Library where every file is a module
// Modules- Encapsulated code (ONLY SHARE MINIMUM);

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
//if function has been evoked in its file and NOT exported in can be called with below.
// require("./7-mind-grenade");

//console.log(names); >>>{ john: 'john', harry: 'harry' }

sayHi("tom");
sayHi(names.john);
sayHi(names.harry);
