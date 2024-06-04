import { connect, JSONCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const jc = JSONCodec();

export const topicOne = async () => {
  for (let index = 0; index < 20; index++) {
    nc.publish(
      "topic-one",
      jc.encode({ action: `This is message number ${index + 1}` })
    );
  }
};

export const topicTwo = async () => {
  for (let index = 0; index < 20; index++) {
    nc.publish(
      "topic-two",
      jc.encode({ action: `This is message number ${index + 1}` })
    );
  }
};
