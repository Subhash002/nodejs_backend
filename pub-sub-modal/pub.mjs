import { EventEmitter } from "events";
const myEmmiter = new EventEmitter();
export class Publisher {
  constructor() {}
  publishMessage(eventName, message) {
    myEmmiter.emit(eventName, message);
  }
}

export class Subscriber {
  constructor(reminder) {
    myEmmiter.on(reminder, (m) => {
      console.log(m);
    });
  }
}
