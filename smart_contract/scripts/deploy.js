const main = async () =>  {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const trasactions = await Transactions.deploy();

  await trasactions.deployed();

  console.log("Transactions deployed to:", trasactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

runMain()
