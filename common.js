import fs from "fs";
import {ethers} from "ethers";

export const polygonProvider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon")
export const bnbProvider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc")
export const arbitrumProvider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/arbitrum")
export const optimismProvider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/optimism")

export const polygonContractAddress = '0xa184998eC58dc1dA77a1F9f1e361541257A50CF4'
export const optimismContractAddress = '0xa2C203d7EF78ed80810da8404090f926d67Cd892'
export const arbitrumContractAddress = '0xAa58e77238f0E4A565343a89A79b4aDDD744d649'

export const arbitrumNetworkId = 42161
export const optimismNetworkId = 10
export const polygonNetworkId = 137

export const wait = ms => new Promise(r => setTimeout(r, ms));
export const sleep = async (millis) => new Promise(resolve => setTimeout(resolve, millis));

export function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomFloatInRange(min, max) {
    const randomFloat = Math.random() * (parseFloat(max) - parseFloat(min)) + parseFloat(min)
    return parseFloat(randomFloat).toFixed(2)
}

export function readWallets(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line !== '');
        return lines;
    } catch (error) {
        console.error('Error reading the file:', error.message);
        return [];
    }
}


export function writeLineToFile(filePath, line) {
    try {
        fs.appendFileSync(filePath, line + '\n', 'utf-8');
    } catch (error) {
        console.error('Error appending to the file:', error.message);
    }
}

export function getUsdValue(value, usdPrice) {
    return (parseInt(value) / Math.pow(10, 18)) * usdPrice
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}