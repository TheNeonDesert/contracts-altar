//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.0;

import "hardhat/console.sol";

contract Altar {
  NeonToken private neon;

  constructor(address neonTokenAddress) {
    neon = NeonToken(neonTokenAddress);
  }

  function pray() public {
    neon.mint(msg.sender, 1 ether);
  }
}

// abstract NeonToken just for easy ref
abstract contract NeonToken {
  function mint(address to, uint256 amount) public virtual;
}
