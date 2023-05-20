// Modules
// CommonJS, every file is a module (by default)
// Modules - Encaspulated Code (only share minimum)

const { john, peter } = require("./4-names-module");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");

require('./7-mind-grenade');

// sayHi("susan");
// sayHi(john);
// sayHi(peter);

