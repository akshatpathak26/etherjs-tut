const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  //compile them in our code
  //complile them seperately

  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.wallet(
    "861c948722ec961c4ad7d6b04c58683d3577ee0892398a563779f06bd77819e8",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = s.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const ContractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await ContractFactory.deploy(); //Stop here! wait for our contract to deploy
  console.log(contract);
}
