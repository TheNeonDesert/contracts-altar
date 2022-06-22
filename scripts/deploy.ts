// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import neonTokenContract from "../contract-artifacts/NeonToken.sol/NeonToken.json";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  if (process.env.NEON_TOKEN_ADDRESS) {
    // Deploy Altar
    const Altar = await ethers.getContractFactory("Altar");
    const altar = await Altar.deploy(process.env.NEON_TOKEN_ADDRESS);
    await altar.deployed();
    console.log("Altar deployed to:", altar.address);

    // Add Altar to MINTABLE role for Neon Token
    const NeonToken = await ethers.getContractAt(
      neonTokenContract.abi,
      process.env.NEON_TOKEN_ADDRESS
    );
    const MINTER_ROLE = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes("MINTER_ROLE")
    );
    await NeonToken.grantRole(MINTER_ROLE, altar.address);
    console.log("Minter granted on NeonToken");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
