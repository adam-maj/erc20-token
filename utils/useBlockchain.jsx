import { useState, useEffect, useContext } from 'react'
import { NotificationContext } from '../components/contexts/NotificationContext'
import VonToken from '../public/abis/VonToken.json'
import VonTokenSale from '../public/abis/VonTokenSale.json'
import Web3 from 'web3'

// I made my own hook to easily interact with the blockchain from my frontend
export default function useBlockchain() {
  const [loading, setLoading] = useState(true)
  const [network, setNetwork] = useState()
  const [web3, setWeb3] = useState()
  const [account, setAccount] = useState()
  const [token, setToken] = useState()
  const [tokenSale, setTokenSale] = useState()
  const [tokenPrice, setTokenPrice] = useState()
  const [tokenPriceWei, setTokenPriceWei] = useState()
  const [tokensSold, setTokensSold] = useState()
  const [tokensAvailable, setTokensAvailable] = useState()
  const [tokensBought, setTokensBought] = useState()
  const { addNotification } = useContext(NotificationContext)

  useEffect(() => {
    // Initialize web3 connection
    setWeb3(new Web3(Web3.givenProvider))
  }, [])

  useEffect(async () => {
    if (web3 && !web3.currentProvider) {
      setLoading(false)
    }

    if (web3) {
      // Prompt window to refresh on given events
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })

      window.ethereum.on('disconnect', () => {
        window.location.reload()
      })

      const network = await web3.eth.net.getNetworkType()
      setNetwork(network)

      // Require that users connect to the ropsten network
      if (network === 'ropsten') {
        // Get the account currently connected to our app
        web3.eth.getCoinbase((err, account) => {
          if (!err && account) {
            setAccount(account)
          } else {
            setLoading(false)
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
    }
  }, [web3])

  useEffect(() => {
    if (network && network !== 'ropsten') {
      setLoading(false)
    }
  }, [network])

  useEffect(async () => {
    if (account) {
      // Once an account is connected, refresh the data values
      await updateData()
      setLoading(false)
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
    if (account) {
      const bought = await token.methods.balanceOf(account).call()
      setTokensBought(bought)
    }
  }

  // Opens up a metamask prompt asking the user to sign in
  function connectAccount() {
    if (window.ethereum) {
      window.ethereum.enable().then(([account]) => {
      setAccount(account)
    })
    }
  }

  function buyTokens(numberOfTokens) {
    if (web3) {
      const data = tokenSale.methods.buyTokens(numberOfTokens).encodeABI()

      web3.eth.sendTransaction({
        from: account,
        to: process.env.tokenSaleContractAddress,
        value: web3.utils.toBN(numberOfTokens * tokenPriceWei),
        data: data,
        gas: 500000
      }).on('transactionHash', () => {
        // When user clicks confirm
        addNotification('Your transaction is being processed.')
      }).on('error', () => {
        // When user clicks reject
        addNotification('Error: Your transaction was cancelled.')
      })


    }
  }

  return { 
    loading, 
    network,
    web3,
    account, 
    tokenPrice, 
    tokensSold, 
    tokensAvailable, 
    tokensBought, 
    buyTokens,
    connectAccount
  }
}
