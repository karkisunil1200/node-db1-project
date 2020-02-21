const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('accounts')
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Failed to get the list of accounts'});
    });
});

module.exports = router;
