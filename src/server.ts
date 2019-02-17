require("dotenv").config();
import pino from "pino";

import { listenEvents, fireFunction } from "./services/listenerService";
import initializeRabbitConnection from "./services/rabbitmqService";
import config from "../config";
import HackathonABI from "./services/abi/Hackathon";
import OwnedRegistryABI from "./services/abi/OwnedRegistry";


async function start() {
  const channel = await initializeRabbitConnection();
  pino().info(" [*] Connected to the queue at %s in the channel %s",
    config.rabbit.uri, config.rabbit.name);

  listenEvents(HackathonABI, "0xac18daccae566822eab333c5c753b7edc523903c", fireFunction, { eventType: "", channel: channel });
  listenEvents(OwnedRegistryABI, "0xee46fd51c4e4d648728d5a1382ec911e2d7a3033", fireFunction, { eventType: "_Voter", channel: channel });
  listenEvents(OwnedRegistryABI, "0x5341d05d678e6100699919ec7f3baa51b9f05baa", fireFunction, { eventType: "_Candidate", channel: channel });

  pino().info("The listener is running");
  pino().info("Press CTRL-C to stop");
}

start();
