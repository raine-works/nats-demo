import { connect, JSONCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const jc = JSONCodec();
const subscription = nc.subscribe("thing");

export const sub = async () => {
  for await (const message of subscription) {
    console.log(jc.decode(message.data));
  }
};
