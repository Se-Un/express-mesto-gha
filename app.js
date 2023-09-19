// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64ff316ff437342ddd54e205',
  };
  next();
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    messagge: statusCode === 500 ? 'Ошибка по умолчанию' : message,
  });
  next();
});

mongoose.connect(DB_PATH);

app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log('Great Work');
});
