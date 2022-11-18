module.exports = {
  registry: [
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'resolver',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'resolver',
          type: 'address'
        }
      ],
      name: 'setResolver',
      outputs: [],
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'label',
          type: 'bytes32'
        },
        {
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'setSubnodeOwner',
      outputs: [],
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'setOwner',
      outputs: [],
      type: 'function'
    }
  ],
  resolver: [
    {
      constant: true,
      inputs: [
        {
          name: 'interfaceID',
          type: 'bytes4'
        }
      ],
      name: 'supportsInterface',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'key',
          type: 'string'
        },
        {
          name: 'value',
          type: 'string'
        }
      ],
      name: 'setText',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'contentTypes',
          type: 'uint256'
        }
      ],
      name: 'ABI',
      outputs: [
        {
          name: 'contentType',
          type: 'uint256'
        },
        {
          name: 'data',
          type: 'bytes'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'x',
          type: 'bytes32'
        },
        {
          name: 'y',
          type: 'bytes32'
        }
      ],
      name: 'setPubkey',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'hash',
          type: 'bytes'
        }
      ],
      name: 'setContenthash',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'addr',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'key',
          type: 'string'
        }
      ],
      name: 'text',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'contentType',
          type: 'uint256'
        },
        {
          name: 'data',
          type: 'bytes'
        }
      ],
      name: 'setABI',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'name',
          type: 'string'
        }
      ],
      name: 'setName',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'contenthash',
      outputs: [
        {
          name: '',
          type: 'bytes'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        }
      ],
      name: 'pubkey',
      outputs: [
        {
          name: 'x',
          type: 'bytes32'
        },
        {
          name: 'y',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'node',
          type: 'bytes32'
        },
        {
          name: 'addr',
          type: 'address'
        }
      ],
      name: 'setAddr',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          name: 'ensAddr',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'a',
          type: 'address'
        }
      ],
      name: 'AddrChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'name',
          type: 'string'
        }
      ],
      name: 'NameChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: true,
          name: 'contentType',
          type: 'uint256'
        }
      ],
      name: 'ABIChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'x',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'y',
          type: 'bytes32'
        }
      ],
      name: 'PubkeyChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'indexedKey',
          type: 'string'
        },
        {
          indexed: false,
          name: 'key',
          type: 'string'
        }
      ],
      name: 'TextChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'node',
          type: 'bytes32'
        },
        {
          indexed: false,
          name: 'hash',
          type: 'bytes'
        }
      ],
      name: 'ContenthashChanged',
      type: 'event'
    }
  ]
}
