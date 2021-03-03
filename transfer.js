const admin = web3.eth.getCoinbase()
const available = 750000

VonToken.deployed().then(i => token = i)
VonTokenSale.deployed().then(i => sale = i)
// Change admin to address
token.transfer(sale.address, available, { from: admin })