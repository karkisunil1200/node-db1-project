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

router.get('/:id', (req, res) => {
  const {id} = req.params;

  Accounts.select('*')
    .from('accounts')
    .where({id})
    .first()
    .then(account => {
      if (account) {
        res.status(200).json({data: account});
      } else {
        res.status(404).json({message: 'The Id is incorrect'});
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({message: 'There was an issue getting the acccount', error: err.message});
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

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Accounts.select('*')
    .from('accounts')
    .where({id})
    .update(changes)
    .then(count => {
      if (count > 0) {
        Accounts.select('*')
          .from('accounts')
          .where({id})
          .first()
          .then(account => {
            res.status(200).json({data: account});
          });
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error updating account'});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  Accounts.select('*')
    .from('accounts')
    .where({id})
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: `Account associated with the ${id} has been deleted`});
      }
    });
});

module.exports = router;
