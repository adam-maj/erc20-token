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
  const [tokenPriceWei, setTokenPriceWei] = useState()
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

  useEffect(() => {
    if (account) {
      // Once an account is connected, refresh the data values
      updateData()
    }
  }, [account])

  useEffect(() => {
    if (tokenSale) {
      // Whenever a sell event is successfully triggered, refresh the data values
      tokenSale.events.Sell().on('data', event => {
        updateData()
      })
    }
  }, [tokenSale])

  async function updateData() {
    // Update the price of each token
    const wei = await tokenSale.methods.tokenPrice().call()
    setTokenPriceWei(wei)
    setTokenPrice(web3.utils.fromWei(wei, "ether"))

    // Update the number of available tokens
    const available = await token.methods.balanceOf(process.env.tokenSaleContractAddress).call()
    setTokensAvailable(parseInt(available))

    // Update the number of tokens sold
    setTokensSold(parseInt(await tokenSale.methods.tokensSold().call()))

    // Update the number of tokens owned by the current account
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
      value: web3.utils.toBN(numberOfTokens * tokenPriceWei),
      data: data,
      gas: 500000
    })
  }

  return { 
    account, 
    tokenPrice, 
    tokensSold, 
    tokensAvailable, 
    tokensBought, 
    buyTokens 
  }
}
