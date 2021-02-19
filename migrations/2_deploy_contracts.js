const VonToken = artifacts.require("./VonToken");

module.exports = function (deployer) {
  deployer.deploy(VonToken);
};
