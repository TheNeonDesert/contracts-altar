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

describe.only("Location", function () {
  let locationContract: Contract;
  // let wildernessContractFactory: Wilderness__factory;
  let owner: SignerWithAddress,
    addr1: SignerWithAddress,
    addr2: SignerWithAddress,
    addrs: SignerWithAddress[];
  // let deployTransaction: TransactionResponse;
  // let deployReceipt: TransactionReceipt;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const _LocationContract = await ethers.getContractFactory("Location");
    locationContract = await _LocationContract.deploy();
    await locationContract.deployed();
  });

  it("Should scale base production modifier by time", async function () {
    const oneMinute = 1;
    const oneHour = 60;
    const oneDay = 60;
    const oneWeek = 60;
    let oneHourModifier = await locationContract.getProductionModifier(60);
    const name = await locationContract.getName();
    return expect(1).to.equal(0);
  });
});
