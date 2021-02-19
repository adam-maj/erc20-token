// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

contract VonToken {
    string public name = "VonToken";
    string public symbol = "NOT63";
    string public standard = "Von Token v1.0";
    uint256 public totalSupply;

    constructor() {
        totalSupply = 1000000;
    }
}