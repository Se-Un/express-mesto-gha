// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64ff316ff437342ddd54e205',
  };
  next();
});

app.use('/', require('./routes/index'));

app.use((err, req, res, next) => {
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
