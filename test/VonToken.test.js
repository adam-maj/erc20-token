let VonToken = artifacts.require('./VonToken.sol')

contract('VonToken', (accounts) => {
  let tokenInstance

  it('Initializes the contract with the correct values', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return tokenInstance.name()
    }).then(name => {
      assert.equal(name, 'Von Token', 'Token has correct name')
      return tokenInstance.symbol()
    }).then(symbol => {
      assert.equal(symbol, 'NOT63', 'Token has correct symbol')
      return tokenInstance.standard()
    }).then(standard => {
      assert.equal(standard, 'Von Token v1.0', 'Token has correct standard')
    })
  })

  it('Sets the total supply upon deployment', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return token.totalSupply()
    }).then(totalSupply => {
      assert.equal(totalSupply.toNumber(), 1000000, 'Sets the total supply to 1,000,000')
      return tokenInstance.balanceOf(accounts[0])
    }).then(adminBalance => {
      assert.equal(adminBalance.toNumber(), 1000000, 'Allocates initial supply to admin account')
    })
  })

  it('Transfers tokens between accounts', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return token.transfer.call(accounts[1], 9999999)
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Error message contains the word revert')
      return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] })
    }).then(receipt => {
      // Test event trigger on transfer
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Transfer', 'Function triggers transfer event')
      assert.equal(receipt.logs[0].event._from, accounts[0], 'Logs the account tokens are transferred from')
      assert.equal(receipt.logs[0].event._to, accounts[1], 'Logs the account tokens are transferred to')
      assert.equal(receipt.logs[0].event._value, 250000, 'Logs the amount transferred between accounts')

      return tokenInstance.balanceOf(accounts[1])
    }).then(balance => {
      assert.equal(balance.toNumber(), 250000, 'Transfers tokens to receiving account')
      return tokenInstance.balanceOf(accounts[0])
    }).then(balance => {
      assert.equal(balance.toNumber(), 750000, 'Transfers tokens from admin account')
    })
  })

  it('Approves tokens for delegated transfer', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      return token.approve.call(accounts[1], 100)
    }).then(success => {
      assert.equal(success, true, 'Approval returns true on success')
      return token.approve(accounts[1], 100)
    }).then(receipt => {
      // Test event trigger on approval
      assert.equal(receipt.logs.length, 1, 'Triffers one event')
      assert.equal(receipt.logs[0].event, 'Approveal', 'Function triggers approval event')
      assert.equal(receipt.logs[0].event._ownder, accounts[0], 'Logs the account tokens are authorized by')
      assert.equal(receipt.logs[0].event._spender, accounts[1], 'Logs the account tokens are authorized to')
      assert.equal(receipt.logs[0].event._value, 100, 'Logs the amount authorized')
      
    })
  })
})