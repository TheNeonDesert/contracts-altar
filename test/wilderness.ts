/* eslint-disable camelcase */

// import { Contract, Event } from "ethers";
// import { ethers } from "hardhat";
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { fail } from "assert";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers } from "hardhat";
// import {
// Character__factory,
// Item__factory,
// Wilderness__factory,
// eslint-disable-next-line node/no-missing-import
// } from "../typechain";

const expect = require("chai").expect;

describe.only("Wilderness", function () {
  let wildernessContract: Contract;
  // let characterContractFactory: Character__factory;
  // let itemContractFactory: Item__factory;
  // let locationContractFactory: Location__factory;
  // let wildernessContractFactory: Wilderness__factory;
  let owner: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress,
    addrs: SignerWithAddress[];
  // let deployTransaction: TransactionResponse;
  // let deployReceipt: TransactionReceipt;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const _WildernessContract = await ethers.getContractFactory("Wilderness");
    wildernessContract = await _WildernessContract.deploy();
    await wildernessContract.deployed();
  });

  it("Should be called Wilderness", async function () {
    const name = await wildernessContract.getName();
    return expect(name).to.equal("Wilderness");
  });

  it("Should have forage action", async function () {
    const actions = await wildernessContract.getActions();
    return expect(actions).to.have.members(["forage"]);
  });

  it("Forage should accept a Character NFT", async function () {
    // const actions = await wildernessContract.getActions();
    // return expect(actions).to.have.members(["forage"]);
  });

  // it("Should create an item and assign it to me", async function () {
  //   const tx = await gameContract.createItem("Item 1");
  //   const receipt = await tx.wait();
  //   const events: Event[] = receipt.events?.filter((x: Event) => {
  //     return x.event === "ItemCreated";
  //   });
  //   if (events && events[0].args) {
  //     const itemContractAddress = events[0].args.item;
  //     const itemInstance = await this.itemContractFactory.attach(
  //       itemContractAddress
  //     );
  //     const itemContractOwner = await itemInstance.owner();
  //     return (
  //       expect(events[0].args.owner).to.equal(owner.address) &&
  //       expect(itemContractOwner).to.equal(owner.address)
  //     );
  //   } else {
  //     return fail("ItemCreated Event missing [args]");
  //   }
  // });
  // it("Should create items and show them in my list of items", async function () {
  //   const itemAddresses: string[] = [];
  //   for (const item in ["Item 1", "Item 2", "Item 3"]) {
  //     const tx = await gameContract.createItem(item);
  //     const receipt = await tx.wait();
  //     const events: Event[] = receipt.events?.filter((x: Event) => {
  //       return x.event === "ItemCreated";
  //     });
  //     if (events && events[0].args) {
  //       itemAddresses.push(events[0].args.item);
  //     }
  //   }
  //   const myItems = await gameContract.getMyItems();
  //   return expect(myItems).to.include.members(itemAddresses);
  // });
  // it("Should allow me to give an item to a character", async function () {
  //   const createCharacterTx = await gameContract.createCharacter("Character 1");
  //   await createCharacterTx.wait();
  //   const createItemTx = await gameContract.createItem("Item 1");
  //   await createItemTx.wait();
  //   const myCharacters = await gameContract.getMyCharacters();
  //   const myItems = await gameContract.getMyItems();
  //   const characterInstance = await this.characterContractFactory.attach(
  //     myCharacters[0]
  //   );
  //   const characterItemsBefore = await characterInstance.getItems();
  //   await characterInstance.giveItem(myItems[0]);
  //   const characterItems = await characterInstance.getItems();
  //   return (
  //     expect(characterItems).to.include.members(myItems) &&
  //     expect(characterItemsBefore).to.not.include.members(myItems)
  //   );
  // });
  // it("Should NOT allow me to give an item to a character I don't own the character", async function () {
  //   const createCharacterTx = await gameContract.createCharacter("Character 1");
  //   await createCharacterTx.wait();
  //   const createItemTx = await gameContract.createItem("Item 1");
  //   await createItemTx.wait();
  //   const myCharacters = await gameContract.getMyCharacters();
  //   const myItems = await gameContract.getMyItems();
  //   const addr1Factory = await this.characterContractFactory.connect(addr1);
  //   const characterInstanceAsAddr1 = await addr1Factory.attach(myCharacters[0]);
  //   await expect(
  //     characterInstanceAsAddr1.giveItem(myItems[0])
  //   ).to.be.revertedWith("Ownable: caller is not the owner");
  // });
  // it("Should NOT allow me to give an item to a character I don't own the item", async function () {
  //   const createCharacterTx = await gameContract.createCharacter("Character 1");
  //   await createCharacterTx.wait();
  //   const createItemTx = await gameContract.createItem("Item 1");
  //   await createItemTx.wait();
  //   const myCharacters = await gameContract.getMyCharacters();
  //   const myItems = await gameContract.getMyItems();
  //   const characterInstance = await this.characterContractFactory.attach(
  //     myCharacters[0]
  //   );
  //   const itemInstance = await this.itemContractFactory.attach(myItems[0]);
  //   await itemInstance.transferOwnership(addr1.address);
  //   await expect(characterInstance.giveItem(myItems[0])).to.be.revertedWith(
  //     "Caller does not own Item"
  //   );
  // });
  // TODO
  // it("Should require me to have 5 wood and 5 stone to craft an axe", async function () {
  //   expect(0).to.equal(1);
  // });
  // TODO
  // it("Should NOT allow me to give an item to a character if it's already assigned", async function () {
  //   expect(0).to.equal(1);
  // });
  // TODO
  // it("Should allow me to unassign an item", async function () {
  //   expect(0).to.equal(1);
  // });
});

// Create Stone Axe
// requires 5 wood 5 stone
// Axe is Item
//    requirements

// Need to implement inventory...
// special class resources?
// Or keep two separate lists, Items and Resources
