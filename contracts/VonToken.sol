// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract VonToken {
    // Fields compliant with ERC20
    string public name = "Von Token";
    string public symbol = "NOT63";
    string public standard = "Von Token v1.0";
    uint256 public totalSupply;

    // Transfer event emitted everytime there is an account transfer
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    // Approval event everytime an account approves another account to spend its tokens
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // Assign intial token supply to admin account
    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    // Transfers amount from sender to destination address
    function transfer(address _to, uint256 _value) public returns (bool success) {
        // The requesting account must have enough tokens to transfer
        require(balanceOf[msg.sender] >= _value);

        // Transfer balance between accounts
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        // Create transfer event
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    // Sender approves account to spend some of their tokens
    function approve(address _spender, uint256 _value) public returns (bool success) {
        // Update allowance mapping to give specified spender an allowance
        allowance[msg.sender][_spender] = _value;

        // Create approve event
        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    // Delegated transfer from one account to another

}
