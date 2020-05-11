const express = require('express');
const Accounts = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  Accounts.select('*')
    .from('accounts')
    .then(accounts => {
      res.status(200).json({data: accounts});
    })
    .catch(err => {
      res.status(500).json({message: 'could not reterive accounts'});
    });
});

router.post('/', (req, res) => {
  const data = req.body;

  Accounts.select('*')
    .from('accounts')
    .insert(data)
    .then(ids => {
      const id = ids[0];
      Accounts.select('*')
        .from('accounts')
        .where({id})
        .first()
        .then(account => {
          res.status(201).json({data: account});
        });
    })
    .catch(err => {
      res.status(500).json({message: 'something went wrong adding accounts', error: err.message});
    });
});

module.exports = router;
