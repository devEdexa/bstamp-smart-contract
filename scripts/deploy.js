async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const BSTAMP = await ethers.getContractFactory("BSTAMP");
    const bstamp = await BSTAMP.deploy();
    console.log("BSTAMP Contract deployed to:", bstamp.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  