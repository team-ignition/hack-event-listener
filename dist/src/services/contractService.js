"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const config_1 = __importDefault(require("../../config"));
const frontier_js_1 = __importDefault(require("@frontier-token-research/frontier-js"));
const Web3 = require("web3");
const web3 = new Web3(config_1.default.node_uri);
pino_1.default().info("Connected to Ethereum :" + config_1.default.node_uri);
const frontier = new frontier_js_1.default({ web3Provider: web3 });
const Erc20Contract = frontier.contracts.Erc20.erc20Contract;
exports.Erc20Contract = Erc20Contract;
const TokenRankedListContract = frontier.contracts.TokenRankedList.tokenRankedListContract;
exports.TokenRankedListContract = TokenRankedListContract;
const CandidatesRegistryContract = frontier.contracts.OwnedRegistry.Candidate.ownedRegistryContract;
exports.CandidatesRegistryContract = CandidatesRegistryContract;
const VotersRegistryContract = frontier.contracts.OwnedRegistry.Voter.ownedRegistryContract;
exports.VotersRegistryContract = VotersRegistryContract;
//# sourceMappingURL=contractService.js.map