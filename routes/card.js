const cardRouters = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/card');

cardRouters.get('/', getCards);
cardRouters.post('/', createCard);
cardRouters.delete('/:cardId', deleteCard);
cardRouters.put('/:cardId/likes', likeCard);
cardRouters.delete('/:cardId/likes', dislikeCard);

module.exports = cardRouters;
