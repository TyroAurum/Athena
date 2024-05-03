'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '3d9a62bab9580e50664a4d17bd5c6da9'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polynet = {
  chainId: 137,
  name: 'Polygon Mainnet',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com/',
  rpcUrl: 'https://polygon-rpc.com/'
}

const bnbchain = {
  chainId:56,
  name: "BNB Smart Chain",
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://1rpc.io/bnb'
}

const testnet = {
  chainId: 80001,
  name: 'Matic Mumbai',
  currency: 'MATIC',
  explorerUrl: ' https://mumbai.polygonscan.com',
  rpcUrl: 'https://polygon-mumbai-pokt.nodies.app'
}

// 3. Create a metadata object
const metadata = {
  name: 'Athena',
  description: 'certificate Hoster',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet, polynet, testnet, bnbchain],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }) {
  return children
}