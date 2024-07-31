import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer);
    return contractReader;
  } else {
    console.error("Ethereum object not found, make sure you have MetaMask installed.");
    return null;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      CustomDexABI.abi,
      signer
    );
    return contractReader;
  } else {
    console.error("Ethereum object not found, make sure you have MetaMask installed.");
    return null;
  }
};

// import { ethers } from "ethers";
// import CustomDexABI from "../utils/CustomDex.json";
// import CustomTokenABI from "../utils/CustomToken.json";
// export const tokenContract = async (address) => {
// const provider = new ethers.providers.Web3Provider(window.ethereum) ;
// const { ethereum } = window;
// if (ethereum) {
// const signer = provider.getSigner ();
// const contractReader = new ethers.Contract(
// address,
// CustomTokenABI.abi,
// signer
// );
// return contractReader;
// }
// };
// export const contract = async () => {
// const provider = new ethers.providers.Web3Provider(window.ethereum) ;
// const { ethereum } = window;
// if (ethereum) {
// const signer = provider.getSigner();
// const contractReader = new ethers.Contract (
// "0x5FbDB2315678afecb367f032d93F642f64180aa3" ,
// CustomDexABI.abi,
// signer
// );
// return contractReader;
// }
// };