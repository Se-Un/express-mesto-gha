const userRouters = require('express').Router();
const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getCurrentUser,
} = require('../controllers/user');

const {
  validationUpdateUser,
  validationUpdateAvatar,
  validationUserId,
} = require('../middlewares/validation');

userRouters.get('/', getUsers);
userRouters.get('/:userId', validationUserId, getUserById);
userRouters.patch('/me', validationUpdateUser, updateUser);
userRouters.patch('/me/avatar', validationUpdateAvatar, updateAvatar);
userRouters.get('/me', getCurrentUser);

module.exports = userRouters;
