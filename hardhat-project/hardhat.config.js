require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const INFURA_KEY = process.env.INFURA_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: INFURA_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
