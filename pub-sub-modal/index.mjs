import { Publisher, Subscriber } from "./pub.mjs";

const publisher = new Publisher();
const subscriber = new Subscriber("event1");
const sub2 = new Subscriber("event2");

publisher.publishMessage("event1", "event1 is starting soon");
publisher.publishMessage("event2", "event2 is starting soon");
