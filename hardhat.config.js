require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const fs = require('fs');

const privateKey = fs.readFileSync(".secret").toString() || "01234567890123456789" 
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:1337
    },
    //Direct Polygon Matic
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {      
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    },
    //Via Infura Network
    infura_mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    infura_matic: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    infura_rinkedby:{
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    //Rinkedby
    rinkedby:{
      url: 'https://rinkeby.arbitrum.io/rpc',
      accounts: [privateKey]
    },

  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
