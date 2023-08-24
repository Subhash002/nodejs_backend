const csv = require("csv-parse");
const fs = require("fs");
const stringify = require("csv-stringify");

fs.createReadStream("log.csv")
  .pipe(csv.parse({ delimiter: "," }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("error", function (err) {
    console.log(err.stack);
  });

const write = fs.createWriteStream("log.csv");
const data = [
  [1, 2, 3],
  [134, 3, 2],
  [1, 2, 3],
];
const col = ["num1", "num2", "num3"];
const stringifier = stringify.stringify({ header: true, columns: col });
for (let i = 0; i < data.length; i++) {
  stringifier.write(data[i]);
}
stringifier.pipe(write);

// Parsing bank data

let sum = 0;
fs.createReadStream("log.csv")
  .pipe(csv.parse({ delimiter: "," }))
  .on("data", function (row) {
    sum += parseFloat(row[0]);
  })
  .on("end", function () {
    console.log(sum);
  })
  .on("error", function (err) {
    console.log(err);
  });
