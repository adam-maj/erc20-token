const VonToken = artifacts.require('./VonToken.sol')
const VonTokenSale = artifacts.require('./VonTokenSale.sol')

contract('VonTokenSale', (accounts) => {
  let tokenSaleInstance
  let tokenInstance

  // Price in Wei (0.001 ETH)
  const tokenPrice = 1000000000000000
  const numberOfTokens = 10
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
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice })
    }).then(receipt => {
      // Test event trigger on purchase
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Sell', 'Function triggers sell event')
      assert.equal(receipt.logs[0].args._buyer, accounts[1], 'Logs the account buying tokens')
      assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'Logs the amount of tokens bought')

      return tokenSaleInstance.tokensSold()
    }).then(amount => {
      assert.equal(amount.toNumber(), numberOfTokens, 'Number of tokens sold is the same as number of tokens bought')
    })
  })
})