const utils = require("web3-utils");
const Web3 = require("web3");
import config from "../../config";


export function listenEvents(
  contractAbi: any, contractAddress: string, fireFunction?: any, args?: any) {
  let nodeUri: string = config.node_uri;
  if (args !== undefined) {
    if (args.node_uri !== undefined) {
      nodeUri = args.node_uri;
    }
  }
  const web3 = new Web3(nodeUri);
  const Contract: any = new web3.eth.Contract(contractAbi, contractAddress);
  Contract.events.allEvents({ fromBlock: 0 })
  .on("data", (event: any) => {
    console.log(event);
    if (fireFunction === undefined) {
      return event;
    }
    if (args === undefined) {
      fireFunction(event);
    } else {
      fireFunction(event, args);
    }
  });
}

export function fireFunction (event: any, args: any) {
  for (const p in event.returnValues) {
      if (event.returnValues.hasOwnProperty(p) ) {
          if (isNaN(event.returnValues[p]) === false && utils.isAddress(event.returnValues[p]) === false) {
              event.returnValues[p] = parseFloat(event.returnValues[p]);
          }
      }
    }
  args.channel.sendToQueue(config.rabbit.name,
      Buffer.from(
        JSON.stringify({
          eventType: event.event + args.eventType,
          eventValue: event
        })
      )
    );
}
