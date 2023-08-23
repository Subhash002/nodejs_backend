import { Worker } from "worker_threads";

export const getFibonacci = (req, res) => {
  const worker = new Worker("./workers/factorialworker");
  worker.postMessage(req.params.number);
  worker.on("message", (result) => {
    res.status(200).json({ result });
  });
  worker.on("error", (err) => {
    res.status(500).json({ error: err.message });
  });
  worker.on("exit", (code) => {
    if (code !== 0) {
      res.status(500).json({ error: `Worker stopped with exit code ${code}` });
    }
  });
};
