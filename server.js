const express = require('express');

const db = require('./data/dbConfig.js');
const accountRouter = require('./accounts/router');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/accounts', accountRouter);

module.exports = server;
