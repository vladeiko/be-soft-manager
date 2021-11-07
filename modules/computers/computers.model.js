const db = require("../../config/db");

const getAllComputers = async () => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT
    computer.id as id,
    computer.location as location,
    user.name as owner_name,
    user.id as owner_id,
    computer.mac_address as mac_address
  FROM computers as computer
  INNER JOIN users as user on user.id = computer.owner_id;
  `;

  const result = await connection.query(queryString);
  return result[0];
};

module.exports = {
  getAllComputers,
};
