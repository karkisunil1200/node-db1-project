const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Failed to get the list of accounts'});
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db('accounts')
    .where({id})
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Count not find the ID'});
    });
});

router.post('/', (req, res) => {
  const body = req.body;
  db('accounts')
    .insert(body)
    .then(account => {
      res.status(200).json(body);
    })
    .catch(error => {
      res.status(500).json({message: 'Failed to add an account'});
    });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  db('accounts')
    .where({id})
    .update(changes)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({message: 'Cound not find the id'});
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db('accounts')
    .where({id})
    .delete()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({message: "Couldn't find the id"});
    });
});

module.exports = router;
