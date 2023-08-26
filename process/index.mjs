import process from "process";
process.on("beforeExit", function (code) {
  console.log(code);
});
console.log(process.argv);
