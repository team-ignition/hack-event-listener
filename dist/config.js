"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "trl-events-listener",
    version: "POC-v2",
    node_uri: process.env.NODE_URI || "ws://18.188.91.154:8546",
    env: process.env.NODE_ENV || "development",
    strictRouting: true,
    rabbit: {
        uri: process.env.RABBIT_URI || "amqp://localhost",
        name: process.env.RABBIT_NAME || "trl"
    }
};
//# sourceMappingURL=config.js.map