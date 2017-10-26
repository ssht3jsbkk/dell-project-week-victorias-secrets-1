var express = require('express');
var router = express.Router();

const Users = require('../models/users.js');

router.get('/', function(req, res) {
  Users.find({}, (err, Users) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(Users);
    }
  });
});

router.post('/', (req, res) => {
  const user = new User(req.body);
  note.save(req.body, (err, result) => {
    if (err)
      return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

module.exports = router;
