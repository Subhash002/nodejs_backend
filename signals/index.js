const readline = require("readline");
let r1 = readline.createInterface(process.stdin, process.stdout);
r1.on("SIGCONT", function () {});
r1.on("SIGINT", function () {});
r1.on("SIGTSTP", function () {});
