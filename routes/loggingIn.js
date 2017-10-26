var express = require('express');
var router = express.Router();

var Users = require('../models/users.js');
var pw = require('../libs/password.js');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', "You are in the zone!");
});

/* POST login user. */
router.post('/', function(req, res, next) {
  const {username, password} = req.body;
  Users.findOne({username}, (err, Users) => {
    if(err) {
      return res.json({error: err});
    }
    if(!user){
      return res.json({message: "That is most incorrect!"});
    }
    pw.match(password, user.password)
      .then(result => {
        if(result){
          req.session.isAuthenticated = true;
          return res.json({message: `User ${username} is a go!`});
        }
        res.json({message: "That is most incorrect!"});
      })
      .catch(err => res.json({error: err}));
  })
});


module.exports = router;
