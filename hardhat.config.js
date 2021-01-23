require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@eth-optimism/plugins/hardhat/compiler')
require('@eth-optimism/plugins/hardhat/ethers')

module.exports = {
  networks: {
    optimism: {
      url: process.env.L2_NODE_URL || 'http://localhost:8545',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 0,
      gas: 9000000
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.7.3'
      }
    ]
  }
}
