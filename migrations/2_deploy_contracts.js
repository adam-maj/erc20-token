const VonToken = artifacts.require('./VonToken.sol');
const VonTokenSale = artifacts.require('./VonTokenSale.sol')

module.exports = (deployer) => {
  deployer.deploy(VonToken, 1000000).then(() => {
    // Price in Wei (0.001 ETH)
    const tokenPrice = 1000000000000000

    return deployer.deploy(VonTokenSale, VonToken.address, tokenPrice)
  })
};