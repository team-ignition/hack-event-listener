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
const pino_1 = __importDefault(require("pino"));
const amqp = require("amqplib");
const config_1 = __importDefault(require("../../config"));
function initializeRabbitConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield amqp.connect(config_1.default.rabbit.uri);
            const channel = yield connection.createChannel();
            channel.assertQueue(config_1.default.rabbit.name, { durable: false });
            return channel;
        }
        catch (e) {
            pino_1.default().error(e);
            return e;
        }
    });
}
exports.default = initializeRabbitConnection;
//# sourceMappingURL=rabbitmqService.js.map