const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, 'https://ropsten.infura.io/v3/2db0448f7ab94d29b7fcc395a6d80271')
      },
      network_id: 3
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './public/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}