//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.0;

// import "./Location.sol";

// contract Wilderness is ERC721Holder {
contract Wilderness {
  string private name;
  string[] private actions;

  constructor() {
    name = "Wilderness";
    actions = ["forage"];
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function getActions() public view returns (string[] memory) {
    return actions;
  }

  //   // function forage()
  //   // send NFT to the wilderness...
  //   // hrmm, is that how to work it out?
  //   // the wilderness owns the nft character when they're out foraging, or ready to collect
  //   // collect sends back the nft to the owner!
  //   // mapping (address => address[]) deployedCharacters --- owner => nfts they own
}
