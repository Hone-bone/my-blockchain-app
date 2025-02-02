import { ethers } from "hardhat";

async function main() {
  const myToken = await ethers.deployContract("MyToken");
  myToken.waitForDeployment();
  console.log(`MyToken deployed to: ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
