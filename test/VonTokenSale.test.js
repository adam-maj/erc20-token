const VonToken = artifacts.require('./VonToken.sol')
const VonTokenSale = artifacts.require('./VonTokenSale.sol')

contract('VonTokenSale', (accounts) => {
  let tokenSaleInstance
  let tokenInstance

  // Price in Wei (0.001 ETH)
  const tokenPrice = 1000000000000000
  const numberOfTokens = 10
  const tokensAvailable = 750000
  const totalTokens = 1000000
  const admin = accounts[0]
  const buyer = accounts[1]

  it('Initializes token sale contract with correct values', () => {
    return VonTokenSale.deployed().then(tokenSale => {
      tokenSaleInstance = tokenSale
      return tokenSaleInstance.address
    }).then(address => {
      assert.notEqual(address, 0x0, 'Token sale has contract address')
      return tokenSaleInstance.tokenContract()
    }).then(address => {
      assert.notEqual(address, 0x0, 'Token sale has token contract address')
      return tokenSaleInstance.tokenPrice()
    }).then(price => {
      assert.equal(price, tokenPrice, 'Token sale has correct token price')
    })
  })

  it('Token purchase functionality is working', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return VonTokenSale.deployed()
    }).then(tokenSale => {
      tokenSaleInstance = tokenSale
      return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, { from: admin })
    }).then(receipt => {
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice })
    }).then(receipt => {
      // Test event trigger on purchase
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Sell', 'Function triggers sell event')
      assert.equal(receipt.logs[0].args._buyer, accounts[1], 'Logs the account buying tokens')
      assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'Logs the amount of tokens bought')

      return tokenSaleInstance.tokensSold()
    }).then(amount => {
      assert.equal(amount.toNumber(), numberOfTokens, 'Increases the number of tokens sold')
      return tokenInstance.balanceOf(tokenSaleInstance.address)
    }).then(balance => {
      assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens, 'Tokens are transferred out of the token sale account')
      return tokenInstance.balanceOf(buyer)
    }).then(balance => {
      assert.equal(balance.toNumber(), numberOfTokens, 'Proper number of tokens are transferred to purchasing account')
      // Users should not be able to underpay for tokens
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1 })
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Cannot underpay for tokens')

      // Users should not be able to buy more tokens then are available in the sale
      return tokenSaleInstance.buyTokens(numberOfTokens + 100000, { from: buyer, value: numberOfTokens * tokenPrice })
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Cannot purchase more tokens then available')
    })
  })

  it('Successfully ends token sale', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return VonTokenSale.deployed()
    }).then(tokenSale => {
      tokenSaleInstance = tokenSale
      // Try to end the sale from an account thats not the admin
      return tokenSaleInstance.endSale({ from: buyer })
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Sender must be an admin to end a sale')
      // Try to end the sale as the admin
      return tokenSaleInstance.endSale({ from: admin })
    })
    .then(receipt => {
      return tokenInstance.balanceOf(admin)
    }).then(balance => {
      assert.equal(balance.toNumber(), totalTokens - numberOfTokens, 'Admin gets all remaining unsold tokens when sale is ended')
      return tokenSaleInstance.tokenPrice()
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('valid'), 'Token sale contract no longer exists')
    })
  })
})