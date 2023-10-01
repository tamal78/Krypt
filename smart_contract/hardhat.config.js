require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
const URL = process.env.alchemy_http_URL;
const KEY = process.env.metamask_accout_private_key;
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: URL,
      accounts: [KEY]
    }
  }
};
