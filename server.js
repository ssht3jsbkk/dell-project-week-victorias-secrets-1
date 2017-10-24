require('dotenv').config();
const express = require(`express`);
const mongoose = require(`mongoose`);
const MongoClient = require('mongodb').MongoClient;
var db;
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

mongoose.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task');

const config = require('./config.js');


// const path = require("path");
// const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}))


// const session = require ('express-session');


app.get(`/`, function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


app.get(`/data`, function(req, res) {
  res.send('data');
})



app.post('/companies', (req, res) => {
  db.collection('companies').save(req.body, (err, result) => {
    if (err) return console.log(err)
   console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/comments', (req, res) => {
  db.collection('comments').save(req.body, (err, result) => {
    if (err) return console.log(err)
   console.log('saved to database')
    res.redirect('/')
  })
})


MongoClient.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
