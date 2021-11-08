const ComputersModel = require("./computers.model");

const getAllComputers = async () => {
  return await ComputersModel.getAllComputers();
};

const deleteComputer = async (computerId) => {
  return await ComputersModel.deleteComputer(computerId);
};

module.exports = {
  getAllComputers,
  deleteComputer,
};
