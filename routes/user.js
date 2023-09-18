const userRouters = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/user');

userRouters.get('/', getUsers);
userRouters.get('/:userId', getUserById);
userRouters.post('/', createUser);
userRouters.patch('/me', updateUser);
userRouters.patch('/me/avatar', updateAvatar);

module.exports = userRouters;
