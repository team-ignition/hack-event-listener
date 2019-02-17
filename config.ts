export default {
  name: "trl-events-listener",
  version: "POC-v2",
  node_uri: process.env.NODE_URI || "wss://rinkeby.infura.io/ws",
  env: process.env.NODE_ENV || "development",
  strictRouting: true,
  rabbit: {
    uri: process.env.RABBIT_URI || "amqp://localhost",
    name: process.env.RABBIT_NAME || "trl"
  }
};
