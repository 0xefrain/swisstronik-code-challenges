const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Swcoin", function () {
  let Swcoin, swcoin, owner, addr1, addr2;

  beforeEach(async () => {
    Swcoin = await ethers.getContractFactory("Swcoin");
    [owner, addr1, addr2] = await ethers.getSigners();
    swcoin = await Swcoin.deploy(250);
  });

  it("Mint the initial supply to the owner", async () => {
    const ownerBalance = await swcoin.balanceOf(owner.address);
    expect(ownerBalance).to.equal(250);
  });

  it("Transfer tokens between accounts", async () => {
    await swcoin.transfer(addr1.address, 50);
    const addr1Balance = await swcoin.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(50);
  });
});