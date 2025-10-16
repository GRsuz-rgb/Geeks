import db from '../config/db.js';

export const createUser = async (user, hash) => {
  return await db.transaction(async trx => {
    const [newUser] = await trx('users').insert(user).returning('*');
    await trx('hashpwd').insert({ username: user.username, password: hash });
    return newUser;
  });
};

export const getAllUsers = () => db('users').select('*');

export const getUserById = (id) => db('users').where({ id }).first();

export const getHashByUsername = (username) => db('hashpwd').where({ username }).first();

export const updateUser = (id, updatedFields) => db('users').where({ id }).update(updatedFields).returning('*');
