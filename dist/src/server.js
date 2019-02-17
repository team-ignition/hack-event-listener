"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const pino_1 = __importDefault(require("pino"));
const listenerService_1 = require("./services/listenerService");
const rabbitmqService_1 = __importDefault(require("./services/rabbitmqService"));
const config_1 = __importDefault(require("../config"));
const Hackathon_1 = __importDefault(require("./services/abi/Hackathon"));
const OwnedRegistry_1 = __importDefault(require("./services/abi/OwnedRegistry"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const channel = yield rabbitmqService_1.default();
        pino_1.default().info(" [*] Connected to the queue at %s in the channel %s", config_1.default.rabbit.uri, config_1.default.rabbit.name);
        listenerService_1.listenEvents(Hackathon_1.default, "0xac18daccae566822eab333c5c753b7edc523903c", listenerService_1.fireFunction, { eventType: "", channel: channel });
        listenerService_1.listenEvents(OwnedRegistry_1.default, "0xee46fd51c4e4d648728d5a1382ec911e2d7a3033", listenerService_1.fireFunction, { eventType: "_Voter", channel: channel });
        listenerService_1.listenEvents(OwnedRegistry_1.default, "0x5341d05d678e6100699919ec7f3baa51b9f05baa", listenerService_1.fireFunction, { eventType: "_Candidate", channel: channel });
        pino_1.default().info("The listener is running");
        pino_1.default().info("Press CTRL-C to stop");
    });
}
start();
//# sourceMappingURL=server.js.map