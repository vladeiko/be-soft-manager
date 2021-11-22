const SoftModel = require("../soft/soft.model");
const ComputersModel = require("./computers.model");

const getAllComputers = async () => {
  return await ComputersModel.getAllComputers();
};

const deleteComputer = async (computerId) => {
  return await ComputersModel.deleteComputer(computerId);
};

const addNewComputer = async ({ location, owner, macAddress }) => {
  const existComputer = await ComputersModel.getComputerByMAC(macAddress);

  if (existComputer) throw new Error("Computer already in system!");

  const addRes = await ComputersModel.addNewComputer({ location, owner, macAddress });

  const newComputer = await ComputersModel.getComputerById(addRes.insertId);

  return newComputer;
};

const getComputerSoft = async (computerId) => {
  return await SoftModel.getComputerSoft(computerId);
};

module.exports = {
  getAllComputers,
  deleteComputer,
  addNewComputer,
  getComputerSoft,
};
