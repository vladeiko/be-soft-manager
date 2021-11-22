const SoftService = require("./soft.service");

const getAllSoft = async (req, res) => {
  try {
    const result = await SoftService.getAllSoft();

    res.status(200).json({ soft: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const deleteSoft = async (req, res) => {
  try {
    const { soft_id } = req.query;

    await SoftService.deleteSoft(soft_id);

    res.status(200).json({ deletedSoftId: Number(soft_id) });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const addNewSoft = async (req, res) => {
  try {
    const { name, type, sub_type, license_type } = req.body.data;

    const result = await SoftService.addNewSoft({ name, type, sub_type, license_type });

    res.status(200).json({ soft: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

module.exports = {
  getAllSoft,
  deleteSoft,
  addNewSoft,
};
