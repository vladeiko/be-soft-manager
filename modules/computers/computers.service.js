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

const removeSoftFromComputer = async (computerId, softId) => {
  return await SoftModel.removeSoftFromComputer(computerId, softId);
};

const addSoftToComputer = async (computerId, softId) => {
  await SoftModel.addSoftToComputer(computerId, softId);

  return await SoftModel.getSoftById(softId);
};

module.exports = {
  getAllComputers,
  deleteComputer,
  addNewComputer,
  getComputerSoft,
  removeSoftFromComputer,
  addSoftToComputer,
};
