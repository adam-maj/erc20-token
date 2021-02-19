const VonToken = artifacts.require("./VonToken");

module.exports = function (deployer) {
  deployer.deploy(VonToken, 1000000);
};
