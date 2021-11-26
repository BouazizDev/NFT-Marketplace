require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:"https://nk7i99lmyxg6.usemoralis.com:2053/server",
      accounts: [privateKey]

    },
    mainnet:{
      url:"https://yfzoty2kqinw.usemoralis.com:2053/server",
      accounts: [privateKey]
 
    }
  },
  solidity: "0.8.4",
};
