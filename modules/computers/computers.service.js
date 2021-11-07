const ComputersModel = require("./computers.model");

const getAllComputers = async () => {
  return await ComputersModel.getAllComputers();
};

module.exports = {
  getAllComputers,
};
