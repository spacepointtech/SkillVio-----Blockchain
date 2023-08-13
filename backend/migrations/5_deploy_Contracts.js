/* const OrganizationEndorser = artifacts.require("OrganizationEndorser");

module.exports = async function (deployer, network, accounts) {
  const admin = accounts[1]; // assuming the deployer is also the admin
  const name = accounts[1]; // the employee's address
  const organization_address = accounts[1]; // the employee's name
  const description = accounts[1];         // "A talented software engineer with 5 years of experience"; // a brief description
  const location = accounts[1]; // the employee's location

  await deployer.deploy(admin, organization_address, name, description, location);
  const OrganizationEndorser = await OrganizationEndorser.deployed();
  console.log(OrganizationEndorser.address);
}; */
 
module.exports = async function (deployer, network, accounts) {
  const admin = accounts[1]; // assuming the deployer is also the admin
  const name = accounts[1]; // the employee's address
  const organization_address = accounts[1]; // the employee's name
  const description = accounts[1];         // "A talented software engineer with 5 years of experience"; // a brief description
  const location = accounts[1]; // the employee's location
const OrganizationEndorser = artifacts.require("OrganizationEndorser");
  await deployer.deploy(OrganizationEndorser, admin, organization_address, name, description, location);
  const deployedContract = await OrganizationEndorser.deployed();
 // await deployedContract.detectNetwork();
}
