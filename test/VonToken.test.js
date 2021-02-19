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
      return tokenInstance.totalSupply()
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
      return tokenInstance.transfer.call(accounts[1], 9999999)
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Error message contains the word revert')
      return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] })
    }).then(receipt => {
      // Test event trigger on transfer
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Transfer', 'Function triggers transfer event')
      assert.equal(receipt.logs[0].args._from, accounts[0], 'Logs the account tokens are transferred from')
      assert.equal(receipt.logs[0].args._to, accounts[1], 'Logs the account tokens are transferred to')
      assert.equal(receipt.logs[0].args._value, 250000, 'Logs the amount transferred between accounts')

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
      return tokenInstance.approve.call(accounts[1], 100)
    }).then(success => {
      assert.equal(success, true, 'Approval returns true on success')
      return tokenInstance.approve(accounts[1], 100, { from: accounts[0] })
    }).then(receipt => {
      // Test event trigger on approval
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Approval', 'Function triggers approval event')
      assert.equal(receipt.logs[0].args._owner, accounts[0], 'Logs the account tokens are authorized by')
      assert.equal(receipt.logs[0].args._spender, accounts[1], 'Logs the account tokens are authorized to')
      assert.equal(receipt.logs[0].args._value, 100, 'Logs the amount authorized')
      
      return tokenInstance.allowance(accounts[0], accounts[1])
    }).then(allowance => {
      assert.equal(allowance.toNumber(), 100, 'Stores the allowance for delegated transfer')
    })
  })

  it('Executes delegated transfer between accounts', () => {
    return VonToken.deployed().then(token => {
      tokenInstance = token
      fromAccount = accounts[2]
      toAccount = accounts[3]
      spendingAccount = accounts[4]

      // Transfer tokens to fromAccount
      return tokenInstance.transfer(fromAccount, 100, { from: accounts[0] })
    }).then(receipt => {
      // Approve spendingAccount to spend 10 tokens from fromAccount
      return tokenInstance.approve(spendingAccount, 10, { from: fromAccount })
    }).then(receipt => {
      // spendingAccount cannot spend more than fromAccount's balance
      return tokenInstance.transferFrom(fromAccount, toAccount, 9999, { from: spendingAccount })
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Cannot transfer more than approved amount')
      // Spending account cannot transfer more from fromAccount than is permitted in allowance
      return tokenInstance.transferFrom.call(fromAccount, toAccount, 20, { from: spendingAccount })
    }).then(assert.fail).catch(error => {
      assert(error.message.includes('revert'), 'Cannot transfer more than approved amount')
      // spendingAccount transfers permitted amount from fromAccount to toAccount
      return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount })
    }).then(success => {
      assert.equal(success, true, 'Transfer returns true on success')
      return tokenInstance.transferFrom(fromAccount, toAccount, 10, { from: spendingAccount })
    }).then(receipt => {
      // Test event trigger on transfer
      assert.equal(receipt.logs.length, 1, 'Triggers one event')
      assert.equal(receipt.logs[0].event, 'Transfer', 'Function triggers transfer event')
      assert.equal(receipt.logs[0].args._from, fromAccount, 'Logs the account tokens are transferred from')
      assert.equal(receipt.logs[0].args._to, toAccount, 'Logs the account tokens are transferred to')
      assert.equal(receipt.logs[0].args._value, 10, 'Logs the amount transferred between accounts')

      return tokenInstance.balanceOf(fromAccount)
    }).then(balance => {
      assert.equal(balance.toNumber(), 90, 'Transfers tokens out of fromAccount')
      return tokenInstance.balanceOf(toAccount)
    }).then(balance => {
      assert.equal(balance.toNumber(), 10, 'Transfers tokens into toAccount')
      return tokenInstance.allowance(fromAccount, spendingAccount)
    }).then(allowance => {
      assert.equal(allowance, 0, 'Transferred amount is deducted from spendingAccounts allowance to fromAccounts tokens')
    })
  })
})