/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    "arbitrum-sepolia": {
      url: API_URL,
      chainId: 421614,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};