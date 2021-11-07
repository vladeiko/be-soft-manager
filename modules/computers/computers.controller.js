const ComputersService = require("./computers.service");

const getAllComputers = async (req, res) => {
  try {
    const result = await ComputersService.getAllComputers();

    res.status(200).json({ computers: result });
  } catch (err) {
    res.status(418).send({ error: err.message });
  }
};

module.exports = {
  getAllComputers,
};
