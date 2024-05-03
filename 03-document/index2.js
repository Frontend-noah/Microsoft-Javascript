const fileSystem = require("fs");

fileSystem.writeFileSync("helloworld.txt", "Hello World");

console.log("The file helloworld.txt has been created.");
