import { useState, useEffect } from 'react'
import Web3 from 'web3'
import VonToken from '../public/abis/VonToken.json'
import VonTokenSale from '../public/abis/VonTokenSale.json'

export default function useBlockchain() {
  const [web3, setWeb3] = useState()
  const [account, setAccount] = useState()
  const [token, setToken] = useState()
  const [tokenSale, setTokenSale] = useState()
  const [tokenPrice, setTokenPrice] = useState()
  const [price, setPrice] = useState()
  const [tokensSold, setTokensSold] = useState()
  const [tokensAvailable, setTokensAvailable] = useState()
  const [tokensBought, setTokensBought] = useState()

  useEffect(() => {
    // Initialize web3 connection
    setWeb3(new Web3(Web3.givenProvider || 'http://localhost:7545'))
  }, [])

  useEffect(async () => {
    if (web3) {
      // Get the account currently connected to our app
      web3.eth.getCoinbase((err, account) => {
        if (!err) {
          console.log(account)
          setAccount(account)
        }
      })

      // Initialize VonToken contract to use in app
      const vonToken = new web3.eth.Contract(VonToken.abi, process.env.tokenContractAddress)
      vonToken.setProvider(web3.currentProvider)
      setToken(vonToken)
  
      // Initialize VonTokenSale contract to use in app
      const vonTokenSale = new web3.eth.Contract(VonTokenSale.abi, process.env.tokenSaleContractAddress)
      vonTokenSale.setProvider(web3.currentProvider)
      setTokenSale(vonTokenSale)
    }
  }, [web3])

  useEffect(async() => {
    if (tokenSale) {
      const wei = await tokenSale.methods.tokenPrice().call()
      setTokenPrice(wei)
      setPrice(web3.utils.fromWei(wei, "ether"))

      const available = await token.methods.balanceOf(process.env.tokenSaleContractAddress).call()
      setTokensAvailable(available)

      setTokensSold(await tokenSale.methods.tokensSold().call())

      if (account) {
        refreshTokensBought()
      }

      tokenSale.events.Sell().on('data', event => {
        console.log('Event triggered...')
        refreshTokensBought()
      })
    }
  }, [tokenSale])

  async function refreshTokensBought() {
    try {
      const bought = await token.methods.balanceOf(account).call()
      setTokensBought(bought)
    } catch(err) {
      setTokensBought(0)
    }
  }

  async function buyTokens(numberOfTokens) {
    const data = tokenSale.methods.buyTokens(numberOfTokens).encodeABI()
    web3.eth.sendTransaction({
      from: account,
      to: process.env.tokenSaleContractAddress,
      value: web3.utils.toBN(numberOfTokens * tokenPrice),
      data: data,
      gas: 500000
    })
  }

  return { web3, account, token, tokenSale, price, tokensSold, tokensAvailable, refreshTokensBought, tokensBought, buyTokens }
}
