var express = require('express');
var router = express.Router();

const Notes = require('../models/notes.js');

router.get('/', function(req, res) {
  Notes.find({}, (err, notes) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(notes);
    }
  });
});


router.get('/:companyName', function(req, res) {
  const cn = req.params.companyName;

  Notes.find({
    companyName: cn
  }, (err, notes) => {
    if (err) {
      res.status(500).send(err)
    } else {

//       Notes.companyName = req.body.companyName || Notes.companyName;
//
//       Notes.save((err, Notes) => {
//             if (err) {
//                 res.status(500).send(err)
//             }
//       res.status(200).send(notes);
//     })
//   };
// })
//
// Notes.findcompanyNameAndRemove(req.params.Notes, (err, Notes) => {
//
//     let response = {
//         message: "Company Name successfully deleted",
//         companyName: Notes._companyName
//     };
      res.status(200).send(notes);

    };
});
})

router.post('/', (req, res) => {
  const note = new Note(req.body);
  note.save(req.body, (err, result) => {
    if (err)
      return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

module.exports = router;
