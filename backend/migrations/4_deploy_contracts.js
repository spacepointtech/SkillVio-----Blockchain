const Employee = artifacts.require("Employee");

module.exports = async function (deployer, network, accounts) {
  const admin = accounts[1]; // assuming the deployer is also the admin
  const employee_address = accounts[2]; // the employee's address
  const name = accounts[3]; // the employee's name
  const description = accounts[4];         // "A talented software engineer with 5 years of experience"; // a brief description
  const location = accounts[5]; // the employee's location

  await deployer.deploy(Employee, admin, employee_address, name, description, location);
  const employeeInstance = await Employee.deployed();
  console.log(employeeInstance.address);
};
