import hardhat from 'hardhat';  // Default import from Hardhat
const { ethers } = hardhat;    // Destructure 'ethers' from the default import
import { expect } from 'chai';


describe("BSTAMP Contract", function () {
  let BSTAMP, bstamp, owner, addr1;

  beforeEach(async function () {
    // Deploy the contract
    [owner, addr1] = await ethers.getSigners();
    BSTAMP = await ethers.getContractFactory("BSTAMP");
    bstamp = await BSTAMP.deploy();
    await bstamp.deployed();
  });

  it("Should create a new stamp", async function () {
    await expect(bstamp.stamp("stampId1", "https://example.com/stamp1", "MyApp"))
      .to.emit(bstamp, "LogNewStamp")
      .withArgs("https://example.com/stamp1", "stampId1", "MyApp");

    const [stampUri, appName] = await bstamp.getStamp("stampId1");
    expect(stampUri).to.equal("https://example.com/stamp1");
    expect(appName).to.equal("MyApp");
  });

  it("Should not allow duplicate stamps", async function () {
    await bstamp.stamp("stampId1", "https://example.com/stamp1", "MyApp");

    await expect(bstamp.stamp("stampId1", "https://example.com/stamp2", "MyApp"))
      .to.be.revertedWith("not allowed");
  });
});
