const UserModel = require("./user.model");

const getUserById = async (id) => {
  return await UserModel.getUserById(id);
};

const getUserByEmail = async (email) => {
  const user = await UserModel.getUserByEmail(email);

  return user;
};

const createUser = async ({ email, password, name }) => {
  const existUser = await getUserByEmail(email);
  if (existUser) throw new Error(`User with email "${email}" already existed`);

  const result = await UserModel.createUser({ email, password, name });
  return await getUserById(result.insertId);
};

const getUserPasswordByEmail = async (email) => {
  const user = await UserModel.getUserByEmail(email);
  if (!user) return;
  return user.password;
};

module.exports = { createUser, getUserById, getUserByEmail, getUserPasswordByEmail };
