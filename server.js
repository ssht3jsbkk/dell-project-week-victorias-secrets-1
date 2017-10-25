require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const Company = require('./models/company.js');
const Notes = require('./models/notes.js');
const Users = require('./models/users.js');
mongoose.connect('mongodb://Victoria\'s Secret\'s:Bootcamp1@ds127375.mlab.com:27375/dell_task');
const config = require('./config.js');
app.use(bodyParser.urlencoded({extended: true}))

// const session = require ('express-session');

app.use(express.static('public'))


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Company', function(req, res) {
  Company.find({}, (err, company) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(company);
    }
  });
})

app.get('/Notes', function(req, res) {
  Notes.find({}, (err, notes) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(notes);
    }
  });
});


app.get('/Users', function(req, res) {

  Users.find({}, (err, Users) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(Users);
    }
  });
});

app.get('/Notes/:companyName', function(req, res) {
  const cn = req.params.companyName;
  //res.send(Notes.find({}, (err, notes) => console.log(notes)));
  Notes.find({
    companyName: cn
  }, (err, notes) => {
    if (err) {
      res.status(500).send(err)
    } else {

      Notes.companyName = req.body.companyName || Notes.companyName;

      Notes.save((err, Notes) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(notes);
    })
  };
})

Notes.findcompanyNameAndRemove(req.params.Notes, (err, Notes) => {

    let response = {
        message: "Company Name successfully deleted",
        companyName: Notes._companyName
    };
    res.status(200).send(response);
});
})


app.get('/Company/:esparkHubLocation', function(req, res) {
  const eshl = req.params.esparkHubLocation;
  //res.send(Notes.find({}, (err, notes) => console.log(notes)));
  Company.find({
    esparkHubLocation: eshl
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {

      Company.esparkHubLocation = req.body.esparkHubLocation || Company.esparkHubLocation;

      Company.save((err, Company) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(company);
    })
  };
})
Notes.findesparkHubLocationAndRemove(req.params.Notes, (err, Notes) => {

    let response = {
        message: "Hub Location successfully deleted",
        esparkHubLocation: Notes._esparkHubLocation
    };
    res.status(200).send(response);
});
})

app.get('/Company/:primaryMentorFocusArea', function(req, res) {
  const pmfa = req.params.primaryMentorFocusArea;

  Company.find({
    primaryMentorFocusArea: pmfa
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {

      Company.primaryMentorFocusArea = req.body.primaryMentorFocusArea || Company.primaryMentorFocusArea;

          Company.save((err, Company) => {
                if (err) {
                    res.status(500).send(err)
                }
          res.status(200).send(company);
        })
      };
    });
    Notes.findprimaryMentorFocusAreaAndRemove(req.params.Notes, (err, Notes) => {

        let response = {
            message: "Primary Mentor Area successfully deleted",
            primaryMentorFocusArea: Notes._primaryMentorFocusArea
        };
        res.status(200).send(response);
    });
})
app.get('/Company/:industrySector', function(req, res) {
  const is = req.params.industrySector;

  Company.find({
    industrySector: is
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {

      Company.industrySector = req.body.industrySector || Company.industrySector;

      Company.save((err, Company) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(company);
    })
  };
})
Notes.findindustrySectorAndRemove(req.params.Notes, (err, Notes) => {

    let response = {
        message: "industry sector successfully deleted",
        industrySector: Notes._industrySector
    };
    res.status(200).send(response);
});
})
app.get('/Company/:salesDistribution', function(req, res) {
  const sd = req.params.salesDistribution;

  Company.find({
    salesDistribution: sd
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {
      Company.salesDistribution = req.body.salesDistribution || Company.salesDistribution;

      Company.save((err, Company) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(company);
    })
  };
})
Notes.findsalesDistributionAndRemove(req.params.Notes, (err, Notes) => {

    let response = {
        message: "Sales distribution successfully deleted",
        salesDistribution: Notes._salesDistribution
    };
    res.status(200).send(response);
});
})
app.get('/Company/:stage', function(req, res) {
  const s = req.params.stage;
  //res.send(Notes.find({}, (err, notes) => console.log(notes)));
  Company.find({
    stage: s
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {
      Company.stage = req.body.stage || Company.stage;

      Company.save((err, Company) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(company);
    })
  };
})
Notes.findstageAndRemove(req.params.Notes, (err, Notes) => {

    let response = {
        message: "Stage successfully deleted",
        stage: Notes._stage
    };
    res.status(200).send(response);
});
})
app.get('/Company/:actionOutstanding', function(req, res) {
  const a = req.params.actionOutstanding;
  //res.send(Notes.find({}, (err, notes) => console.log(notes)));
  Company.find({
    actionOutstanding: a
  }, (err, company) => {
    if (err) {
      res.status(500).send(err)
    } else {
      Company.actionOutstanding = req.body.actionOutstanding || Company.actionOutstanding;

      Company.save((err, Company) => {
            if (err) {
                res.status(500).send(err)
            }
      res.status(200).send(company);
    })
  };
  })
  Notes.findactionOutstandingAndRemove(req.params.Notes, (err, Notes) => {

      let response = {
          message: "Oustanding action has been successfully deleted",
          actionOutstanding: Notes._actionOutstanding
      };
      res.status(200).send(response);
  });
  })
//POSTS

app.post('/Company', (req, res) => {
  console.log('REQ BODY:')
  console.log(req.body)
  const comp = new Company(req.body);
  console.log(comp);
  comp.save(req.body, (err, result) => {
    if (err)
      return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
app.post('/Notes', (req, res) => {
  const note = new Notes(req.body);
  note.save(req.body, (err, result) => {
    if (err)
      return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
app.post('/Users', (req, res) => {
  const user = new User(req.body);
  note.save(req.body, (err, result) => {
    if (err)
      return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.listen(3000, () => {
  console.log('listening on 3000')
});
