// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const { validationLogin, validationCreateUser } = require('./middlewares/validation');
const { login, createUser } = require('./controllers/user');

const app = express();

app.use(bodyParser.json());

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);
app.use(auth);
app.use('/', require('./routes/index'));

app.use(errors());

app.use((err, req, res, next) => {
  console.dir(err);
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Ошибка по умолчанию' : message,
  });
  next();
});

mongoose.connect(DB_PATH);

app.listen(PORT, () => {
  console.log('Great Work');
});
