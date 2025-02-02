import { ethers } from "hardhat";
import { expect } from "chai";

describe("MyToken contract", () => {
  it("トークンの全供給量を所有者に割り当てる", async () => {
    const [owner] = await ethers.getSigners();

    const myToken = await ethers.deployContract("MyToken");

    const ownerBalance = await myToken.balanceOf(owner.address);

    expect(await myToken.totalSupply()).to.equal(ownerBalance);
  });
});
