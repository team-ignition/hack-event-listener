"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        constant: true,
        inputs: [
            {
                name: "_accountChecked",
                type: "bytes32"
            }
        ],
        name: "applicationData",
        outputs: [
            {
                name: "data",
                type: "string"
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
                name: 0,
                type: "uint256"
            }
        ],
        name: "log_wl",
        outputs: [
            {
                name: 0,
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
                name: "_accountToRemove",
                type: "address"
            }
        ],
        name: "remove",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_accountToWhiteList",
                type: "address"
            }
        ],
        name: "whiteList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_accountChecked",
                type: "address"
            }
        ],
        name: "isWhitelisted",
        outputs: [
            {
                name: "whitelisted",
                type: "bool"
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
                name: 0,
                type: "bytes32"
            }
        ],
        name: "applications",
        outputs: [
            {
                name: "stakedAmount",
                type: "uint256"
            },
            {
                name: "data",
                type: "string"
            },
            {
                name: "approved",
                type: "bool"
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
                name: "_accountChecked",
                type: "bytes32"
            }
        ],
        name: "applicationAmount",
        outputs: [
            {
                name: "amount",
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
        name: "listingCounter",
        outputs: [
            {
                name: 0,
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_id",
                type: "bytes32"
            },
            {
                name: "_amount",
                type: "uint256"
            },
            {
                name: "_data",
                type: "string"
            }
        ],
        name: "apply",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: 0,
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getLog",
        outputs: [
            {
                name: 0,
                type: "address[]"
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
                name: "_accountChecked",
                type: "bytes32"
            }
        ],
        name: "applicationIsApproved",
        outputs: [
            {
                name: "approved",
                type: "bool"
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
                name: "_newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "_whiteListedAccount",
                type: "address"
            }
        ],
        name: "_WhiteList",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "_removedAccount",
                type: "address"
            }
        ],
        name: "_Remove",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "listingHash",
                type: "bytes32"
            },
            {
                indexed: false,
                name: "deposit",
                type: "uint256"
            },
            {
                indexed: false,
                name: "data",
                type: "string"
            },
            {
                indexed: true,
                name: "applicant",
                type: "address"
            }
        ],
        name: "_Application",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address"
            }
        ],
        name: "OwnershipRenounced",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    }
];
//# sourceMappingURL=OwnedRegistry.js.map