
const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 10);

  await Voting_.deployed();

  console.log(
    `Contract address : ${Voting_.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
