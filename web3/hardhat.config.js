require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.4.1",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
 
       
  solidity: {
    version: "0.8.23",
    defaultNetwork: 'sepolia',
    networks :{
      hardhat : {},
      sepoli : {
        url : 'https://rpc.ankr.com/eth_sepolia',
        accounts:  [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
