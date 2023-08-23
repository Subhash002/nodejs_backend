import fs from "fs";
import { Worker } from "worker_threads";
import { performance } from "perf_hooks";

const filePath = "log.txt";

const start = performance.now();

const worker = new Worker("./readFileWorker.mjs", { workerData: "log3.txt" });
worker.on("message", (data) => {
  console.log(data.data);
  const end = performance.now();
  const elapsed = end - start;
  console.log(`Elapsed time (worker): ${elapsed} milliseconds`);
});

worker.on("error", (err) => console.error(err));
worker.on("exit", (code) => {
  if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
});

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(data);
  const end = performance.now();
  const elapsed = end - start;
  console.log(`Elapsed time (fs.readFile): ${elapsed} milliseconds`);
});

const getFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
};

getFile("log2.txt")
  .then((data) => {
    console.log(data);
    const end = performance.now();
    const elapsed = end - start;
    console.log(`Elapsed time (getFile): ${elapsed} milliseconds`);
  })
  .catch((err) => console.error(err));

let stream = fs.createReadStream("log4.txt");
stream.on("data", (data) => {
  let chunk = data.toString();
  console.log(chunk);
});

let writeStream = fs.createWriteStream("log5.txt");
for (let i = 0; i < 10; i++) {
  writeStream.write(`${i}\n`);
}

console.log("Done");
