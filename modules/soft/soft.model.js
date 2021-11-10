const db = require("../../config/db");

const getAllSoft = async () => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT
    soft.id as id,
    soft.name as name,
    soft.type as type,
    soft.sub_type as sub_type,
    soft.license_type as license_type
  FROM soft as soft
  `;

  const result = await connection.query(queryString);
  return result[0];
};

const deleteSoftFromComputer = async (softId) => {
  const connection = await db.getPromise();

  const params = [softId];

  const queryString = `
  DELETE FROM computers_soft
  WHERE soft_id = ?;
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const deleteSoft = async (softId) => {
  const connection = await db.getPromise();

  const params = [softId];

  const queryString = `
  DELETE FROM soft
  WHERE id = ?;
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const getSoftById = async (id) => {
  const connection = await db.getPromise();

  const params = [id];

  const queryString = `
  SELECT
    soft.id as id,
    soft.name as name,
    soft.type as type,
    soft.sub_type as sub_type,
    soft.license_type as license_type
  FROM soft as soft
  `;

  const result = await connection.query(queryString, params);
  return result[0][0];
};

const addNewSoft = async ({ name, type, sub_type, license_type }) => {
  const connection = await db.getPromise();

  const params = [name, type, sub_type, license_type];

  const queryString = `
  INSERT INTO soft (name, type, sub_type, license_type)
  VALUES (?, ?, ?, ?);
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = {
  getAllSoft,
  deleteSoftFromComputer,
  deleteSoft,
  addNewSoft,
  getSoftById,
};
