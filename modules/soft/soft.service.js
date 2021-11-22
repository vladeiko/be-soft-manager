const SoftModel = require("./soft.model");

const getAllSoft = async () => {
  return await SoftModel.getAllSoft();
};

const deleteSoft = async (softId) => {
  await SoftModel.deleteSoftFromComputer(softId);
  return await SoftModel.deleteSoft(softId);
};

const addNewSoft = async ({ name, type, sub_type, license_type }) => {
  const addRes = await SoftModel.addNewSoft({ name, type, sub_type, license_type });

  const newSoft = await SoftModel.getSoftById(addRes.insertId);

  return newSoft;
};

module.exports = {
  getAllSoft,
  deleteSoft,
  addNewSoft,
};
