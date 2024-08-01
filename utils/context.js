import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth } from "./utils";

export async function swapEthToToken(tokenName, amount) {
  try {
    let tx = { value: toWei(amount) };
    const contractObj = await contract();
    const data = await contractObj.swapEthToToken(tokenName, tx);
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj.allowance(
      owner,
      "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );
    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount))
    );
    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount)
    );
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenBalance(tokenName, address) {
  try {
    const contractObj = await contract();
    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(address);
    const data = await tokenContractObj.approve(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      toWei(amount)
    );
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getAllHistory() {
  try {
    const contractObj = await contract();
    const getAllHistory = await contractObj.getAllHistory();
    const historyTransaction = getAllHistory.map((history, i) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
      userAddress: history.userAddress,
    }));
    return historyTransaction;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString());
  return toWei.toString();
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

// import { BigNumber, ethers } from "ethers";
// import { contract, tokenContract } from "./contract";
// import { toEth } from "./utils";
// export async function swapEthToToken (tokenName, amount) {
// try {
// let tx = { value: toWei(amount) };
// const contractObj = await contract();
// const data = await contractObj.swapEthToToken (tokenName, tx);
// const receipt = await data.wait();
// return receipt;
// } catch (e) {
// return parseErrorMsg(e);
// }
// }
// export async function hasValidAllowance (owner, tokenName, amount) {
// try {
// const contractObj = await contract();
// const address = await contractObj.getTokenAddress (tokenName);
// const tokenContractObj=await tokenContract(address);
// const data = await tokenContractObj.allowance(
//     owner,
//     "0x5FbDB2315678afecb367f032d93F642f64180aa3");
// const result = BigNumber.from(data.toString()).gte(
// BigNumber.from(toWei(amount))
// );
// return result;

// } catch (e) {
// return parseErrorMsg (e);
// }
// }


// export async function swapTokenToEth (tokenName, amount) {
// try {
// const contractObj = await contract();
// const data = await contractObj.swapTokenToEth (tokenName, toWei(amount));
// const receipt = await data.wait();
// return receipt;
// } catch (e) {
// return parseErrorMsg(e);
// }
// }

// export async function swapTokenToToken(srcToken, destToken, amount) {
// try {
// const contractObj = await contract();
// const data = await contractObj.swapTokenToToken(
// srcToken,
// destToken,
// toWei(amount)
// )
// const receipt = await data.wait();
// return receipt;
// } catch (e) {
// return parseErrorMsg (e);
// }
// }

// export async function getTokenBalance(tokenName, address){
//  const contractObj = await contract();
// const balance = contractObj.getBalance (tokenName, address);
// return balance;
// }
// export async function getTokenAddress (tokenName) {
// try {
// const contractObj = await contract();
// const address = await contractObj.getTokenAddress (tokenName);
// return address;
// } catch (e) {
// return parseErrorMsg(e);
// }
// }

// export async function increaseAllowance(tokenName, amount){
// try {
// const contractObj = await contract();
// const address = await contractObj.getTokenAddress (tokenName);
// const tokenContractObj = await tokenContract (address);
// const data = await tokenContractObj.approve (
// "0x5FbDB2315678afecb367f032d93F642f64180aa3",
// toWei(amount)
// );
// const receipt = await data.wait();
// return receipt;
// } catch (e) {
// 	return parseErrorMsg(e);
// }
// }

// export async function getAllHistory() {
// try {
// const contractObj = await contract();
// const getAllHistory = await contractObj.getAllHistory();
// const historyTransaction = getAllHistory.map((history, i) => ({
// historyId: history.historyId.toNumber(),
// tokenA: history.tokenA,
// tokenB: history.tokenB,
// inputValue: toEth(history?.inputValue),
// outputValue: toEth(history?.outputValue),
// userAddress: history.userAddress,
// }));

// 	return historyTransaction;
// } catch(e){
// return parseErrorMsg(e);
// }
// }

// function toWei(amount) {
// const toWei = ethers.utils.parseUnits (amount.toString());
// return toWei.toString();
// }
// function parseErrorMsg(e) {
// const json = JSON.parse(JSON.stringify(e));
// return json?. reason || json?.error?.message;
// }