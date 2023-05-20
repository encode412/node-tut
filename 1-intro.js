// GLOBALS - NO WINDOW !!!

// __dirname   - path to current directory
// __filename  - file name
// __require   - function to use modules (CommonJs)
// module      - info about current module (file)
// process     - info about env and where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello danger!");
}, 1000);
