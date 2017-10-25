require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
// var db;
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

const Company = require('./models/company.js');
const Notes = require('./models/notes.js');

mongoose.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task');

const config = require('./config.js');


// const path = require("path");
// const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}))


// const session = require ('express-session');


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


app.get('/data', function(req, res) {
  res.send('data');
})



app.post('/Company', (req, res) => 
  console.log('REQ BODY:')
  console.log(req.body)
  const comp = new Company(req.body);
  console.log(comp);
  comp.save(req.body, (err, result) => {

    if (err) return console.log(err)
      console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/Notes', (req, res) => {
  const note = new Note(req.body);
  note.save(req.body, (err, result) => {

    if (err) return console.log(err)
   console.log('saved to database')
    res.redirect('/')
  })
})


// MongoClient.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task', (err, database) => {
//   if (err) return console.log(err)
//   db = database
app.listen(3000, () => {
  console.log('listening on 3000')
})
// })
//
Company.find({}, (err, company) => console.log(company))
