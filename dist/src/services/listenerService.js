"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("web3-utils");
const Web3 = require("web3");
const config_1 = __importDefault(require("../../config"));
function listenEvents(contractAbi, contractAddress, fireFunction, args) {
    let nodeUri = config_1.default.node_uri;
    if (args !== undefined) {
        if (args.node_uri !== undefined) {
            nodeUri = args.node_uri;
        }
    }
    const web3 = new Web3(nodeUri);
    const Contract = new web3.eth.Contract(contractAbi, contractAddress);
    Contract.events.allEvents({ fromBlock: 0 })
        .on("data", (event) => {
        console.log(event);
        if (fireFunction === undefined) {
            return event;
        }
        if (args === undefined) {
            fireFunction(event);
        }
        else {
            fireFunction(event, args);
        }
    });
}
exports.listenEvents = listenEvents;
function fireFunction(event, args) {
    for (const p in event.returnValues) {
        if (event.returnValues.hasOwnProperty(p)) {
            if (isNaN(event.returnValues[p]) === false && utils.isAddress(event.returnValues[p]) === false) {
                event.returnValues[p] = parseFloat(event.returnValues[p]);
            }
        }
    }
    args.channel.sendToQueue(config_1.default.rabbit.name, Buffer.from(JSON.stringify({
        eventType: event.event + args.eventType,
        eventValue: event
    })));
}
exports.fireFunction = fireFunction;
//# sourceMappingURL=listenerService.js.map