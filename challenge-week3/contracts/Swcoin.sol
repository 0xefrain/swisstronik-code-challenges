// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Swcoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("Swcoin", "SWC") {
        _mint(msg.sender, initialSupply);
    }
}