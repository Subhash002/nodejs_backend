import readline from "readline";
let r1 = readline.createInterface(process.stdin, process.stdout);
// r1.write("Hey man ley the US sink");
r1.question("Please enter the number ", (n) => {
  console.log(n);
  r1.close();
});
