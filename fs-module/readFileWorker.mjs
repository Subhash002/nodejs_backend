import { workerData, parentPort } from "worker_threads";
import fs from "fs";

fs.readFile(workerData, "utf8", (err, data) => {
  if (err) {
    parentPort.postMessage({ error: err });
  } else {
    parentPort.postMessage({ data: data });
  }
});
