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

const deleteComputer = async (computerId) => {
  const connection = await db.getPromise();

  const params = [computerId];

  const queryString = `
  DELETE FROM computers
  WHERE id = ?;
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const getComputerByMAC = async (macAddress) => {
  const connection = await db.getPromise();

  const params = [macAddress];

  const queryString = `
  SELECT
    computer.id as id,
    computer.location as location,
    user.name as owner_name,
    user.id as owner_id,
    computer.mac_address as mac_address
  FROM computers as computer
  INNER JOIN users as user on user.id = computer.owner_id
  WHERE computer.mac_address = ?;
  `;

  const result = await connection.query(queryString, params);
  return result[0][0];
};

const getComputerById = async (id) => {
  const connection = await db.getPromise();

  const params = [id];

  const queryString = `
  SELECT
    computer.id as id,
    computer.location as location,
    user.name as owner_name,
    user.id as owner_id,
    computer.mac_address as mac_address
  FROM computers as computer
  INNER JOIN users as user on user.id = computer.owner_id
  WHERE computer.id = ?;
  `;

  const result = await connection.query(queryString, params);
  return result[0][0];
};

const addNewComputer = async ({ location, ownerId, macAddress }) => {
  const connection = await db.getPromise();

  const params = [location, ownerId, macAddress];

  const queryString = `
  INSERT INTO computers (location, owner_id, mac_address)
  VALUES (?, ?, ?);
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = {
  getAllComputers,
  deleteComputer,
  getComputerByMAC,
  addNewComputer,
  getComputerById,
};
