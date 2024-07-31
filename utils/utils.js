import { ethers } from 'ethers';
export function towei (amount, decimals = 18) {
const towei = ethers.utils.parseUnits(amount,decimals)
return towei.toString()
}
export function toEth(amount, decimals = 18) {
const toEth = ethers.utils.formatUnits (amount, decimals)
return toEth.toString()
}