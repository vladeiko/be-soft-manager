const ComputersService = require("./computers.service");

const getAllComputers = async (req, res) => {
  try {
    const result = await ComputersService.getAllComputers();

    res.status(200).json({ computers: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const deleteComputer = async (req, res) => {
  try {
    const { computer_id } = req.query;

    await ComputersService.deleteComputer(computer_id);

    res.status(200).json({ deletedComputerId: Number(computer_id) });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const addNewComputer = async (req, res) => {
  try {
    const { location, owner, mac_address } = req.body.data;

    const result = await ComputersService.addNewComputer({ location, owner, macAddress: mac_address });

    res.status(200).json({ computer: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const getComputerSoft = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ComputersService.getComputerSoft(id);

    res.status(200).json({ soft: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

const removeSoftFromComputer = async (req, res) => {
  try {
    const { computer_id } = req.params;
    const { soft_id } = req.query;

    console.log(computer_id, soft_id);

    await ComputersService.removeSoftFromComputer(computer_id, soft_id);

    res.status(200).json({ removedSoftId: Number(soft_id) });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

module.exports = {
  getAllComputers,
  deleteComputer,
  addNewComputer,
  getComputerSoft,
  removeSoftFromComputer,
};
