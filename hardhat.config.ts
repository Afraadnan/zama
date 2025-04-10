require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL || "https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    zama: {
      url: process.env.ZAMA_URL || "https://devnet.zama.ai",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    localDev: {
      url: "http://127.0.0.1:8545",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    localCoprocessor: {
      url: "http://127.0.0.1:8545",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
