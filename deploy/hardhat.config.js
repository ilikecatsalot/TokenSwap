
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat", // Set default network to hardhat
  networks: {
    hardhat: {
      chainId: 1337, // Default chainId for Hardhat
    },
    // Remove polygon_mumbai configuration if not needed
  },
};
