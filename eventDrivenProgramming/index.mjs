import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();
function notifyEvent(event) {
  {
    console.log(`This is my name ${event}`);
  }
}

myEventEmitter.on("connection", notifyEvent);
myEventEmitter.emit("connection", "Subhash");
myEventEmitter.emit("connection", "Kandway");
