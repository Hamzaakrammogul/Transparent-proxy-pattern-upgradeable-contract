/** @type import('hardhat/config').HardhatUserConfig */
require('@openzeppelin/hardhat-upgrades');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();



const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL
const PRIVATE_KEY= process.env.PRIVATE_KEY
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks:{
    goerli:{
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
