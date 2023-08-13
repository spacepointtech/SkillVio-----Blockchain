const Admin = artifacts.require ("Admin");
module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Admin);
 const admin = await Admin.deployed();
  console.log(admin.address);
};
