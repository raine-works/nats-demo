import { connect, JSONCodec } from "nats";

const nc = await connect({ servers: "localhost:4222" });
const jc = JSONCodec();

export const pub = async () => {
  for (let index = 0; index < 20; index++) {
    nc.publish(
      "thing",
      jc.encode({ action: `This is message number ${index + 1}` })
    );
  }

  await nc.drain();
  await nc.close();
};
