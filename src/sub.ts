import { connect, JSONCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const jc = JSONCodec();

export const subOne = async () => {
  const subscription = nc.subscribe("topic-one");
  console.log(`Listening to ${subscription.getSubject()}`);
  for await (const message of subscription) {
    console.log(message.subject, jc.decode(message.data));
  }
};

export const subTwoWithQueue = async () => {
  const subscription = nc.subscribe("topic-two", { queue: "my-queue" });
  console.log(`Listening to ${subscription.getSubject()}`);
  for await (const message of subscription) {
    console.log(message.subject, jc.decode(message.data));
  }
};
