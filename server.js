require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//var session = require ('express-session')

const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

mongoose.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task');
const config = require('./config.js');
var login = require('./routes/loggingIn');
var logout = require ('./routes/loggingOut');
var register = require('./routes/registration');
var companies = require('./routes/companies');
var notes = require('./routes/notes');
var users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

const requiredAuthentication = (req, res, next) =>  {
  if (req.session.isAuthenticated)  {
    next();
  } else {
    res.render('unauthorised');
  }
};

app.use((req, res, next) => {
  console.log(req.session);
  next();
})



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/routes/logIn.html');
});

app.get('/main', function(req, res) {
  res.sendFile(__dirname + '/routes/main.html');
});
app.get('/register', function(req, res) {
  res.sendFile(__dirname + '/routes/register.html');
});
app.get('/search', function(req, res) {
  res.sendFile(__dirname + '/routes/search.html');
});
app.get('/newCompany', function(req, res) {
  res.sendFile(__dirname + '/routes/newCompany.html');
});
app.get('/addComments', function(req, res) {
  res.sendFile(__dirname + '/routes/addComments.html');
});
app.get('/editCompany', function(req, res) {
  res.sendFile(__dirname + '/routes/editCompany.html');
});

app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/companies', companies);
app.use('/notes', notes);
app.use('/users', users);

app.listen(3000, () => {
  console.log('listening on 3000')
});
