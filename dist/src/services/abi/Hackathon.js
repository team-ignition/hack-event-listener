"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        constant: false,
        inputs: [
            {
                name: "_id",
                type: "uint256"
            },
            {
                name: "_candidateRegistry",
                type: "address"
            }
        ],
        name: "setCandidateRegistry",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_start_ts",
                type: "uint256"
            },
            {
                name: "_end_ts",
                type: "uint256"
            },
            {
                name: "_weights",
                type: "uint256[]"
            }
        ],
        name: "newHackathon",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "address"
            }
        ],
        name: "votesReceived",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "balance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_id",
                type: "uint256"
            },
            {
                name: "_candidateAddress",
                type: "address"
            },
            {
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "vote",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "address"
            }
        ],
        name: "votesBalance",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_amount",
                type: "uint256"
            },
            {
                name: "id",
                type: "uint256"
            }
        ],
        name: "buyTokenVotes",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "TOKEN",
        outputs: [
            {
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            },
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "voteStack",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "nonce",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        name: "hackathons",
        outputs: [
            {
                name: "start_ts",
                type: "uint256"
            },
            {
                name: "end_ts",
                type: "uint256"
            },
            {
                name: "juryRegistry",
                type: "address"
            },
            {
                name: "candidateRegistry",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_id",
                type: "uint256"
            },
            {
                name: "_juryRegistry",
                type: "address"
            }
        ],
        name: "setJuryRegistry",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_account",
                type: "address"
            },
            {
                name: "_id",
                type: "uint256"
            }
        ],
        name: "getRank",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "_recipient",
                type: "address"
            },
            {
                indexed: false,
                name: "_amount",
                type: "uint256"
            },
            {
                indexed: false,
                name: "_periodIndex",
                type: "uint256"
            }
        ],
        name: "VotesBought",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "_voterAddress",
                type: "address"
            },
            {
                indexed: true,
                name: "_candidateAddress",
                type: "address"
            },
            {
                indexed: false,
                name: "_amount",
                type: "uint256"
            },
            {
                indexed: false,
                name: "_periodIndex",
                type: "uint256"
            }
        ],
        name: "Vote",
        type: "event"
    }
];
//# sourceMappingURL=Hackathon.js.map