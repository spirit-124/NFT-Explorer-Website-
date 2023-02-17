require("@nomicfoundation/hardhat-toolbox");
// require("@nominclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/m1aX53yDZRALhjJLurIVcuMKqnh-J6S3",
      accounts: ['694104b3187a1abeafeb83e5e037fb82724384794a4416523fb65da889051eb6']
    }
  }
};


