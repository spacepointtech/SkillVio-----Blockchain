const Skills = artifacts.require("Skills");
module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Skills);
 const skills = await Skills.deployed();
  console.log(skills.address);
};
