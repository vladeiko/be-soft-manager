const db = require("../../config/db");

const getUserById = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT
    user.id as id,
    user.name as name,
    user.email as email,
    user.password as password,
    role.name as role_name,
    role.sys_name as role_sys_name
  FROM users as user
  INNER JOIN roles as role on user.role_id = role.id
  WHERE user.id = ?;
  `;

  const result = await connection.query(queryString, [id]);
  return result[0][0];
};

const getUserByEmail = async (email) => {
  try {
    const connection = await db.getPromise();

    const queryString = `
  SELECT
    user.id as id,
    user.name as name,
    user.email as email,
    user.password as password,
    role.name as role_name,
    role.sys_name as role_sys_name
  FROM users as user
  INNER JOIN roles as role on user.role_id = role.id
  WHERE user.email = ?;
  `;

    const result = await connection.query(queryString, [email]);
    return result[0][0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

const createUser = async ({ email, password, name }) => {
  const connection = await db.getPromise();
  const params = [email, password, name];

  const queryString = `
  INSERT INTO users (email, password, name)
  VALUES (?, ?, ?);
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

const updateName = async (id, name) => {
  const connection = await db.getPromise();
  const params = [name, id];

  const queryString = `
  UPDATE users
  SET name = ?
  WHERE id = ?
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

const updateEmail = async (id, email) => {
  const connection = await db.getPromise();
  const params = [email, id];

  const queryString = `
  UPDATE users
  SET email = ?
  WHERE id = ?
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

const updatePassword = async (id, password) => {
  const connection = await db.getPromise();
  const params = [password, id];

  const queryString = `
  UPDATE users
  SET password = ?
  WHERE id = ?
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  updateName,
  updateEmail,
  updatePassword,
};
