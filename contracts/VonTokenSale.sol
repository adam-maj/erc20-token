// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "./VonToken.sol";

contract VonTokenSale {
    address admin;
    VonToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    // Assign initial token price and set admin account
    constructor(VonToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    // Safe multiply function so users can manipulate numbers
    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    // User can buy tokens
    function buyTokens(uint256 _numberOfTokens) public payable {
        // Make sure users cant overpay or underpay for tokens
        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        
        // There must be enough tokens in the token sale to satisfy the purchase
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);

        // Makes sure that the trasnfer runs successfully
        require(tokenContract.transfer(msg.sender, _numberOfTokens));

        // Increment tokens sold every time tokens are purchased
        tokensSold += _numberOfTokens;

        // Emit sell event
        emit Sell(msg.sender, _numberOfTokens);
    }
}