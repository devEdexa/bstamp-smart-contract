require('@nomicfoundation/hardhat-toolbox'); // This includes several useful plugins
require('@nomiclabs/hardhat-ethers'); // For Ethers.js integration
require('dotenv').config(); // To use environment variables from the .env file

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28", // Set your Solidity version
  networks: {
    hardhat: {
      // This is the local Hardhat network (default)
    },
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY], // The account to deploy with (replace with your own private key)
    },
    edexa:{
      url: "https://testnet.edexa.com/rpc",
      accounts: [process.env.PRIVATE_KEY],  
    },
   
    // Add other networks as needed 
  },
};
