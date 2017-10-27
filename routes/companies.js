var express = require('express');
var router = express.Router();

const Company = require('../models/company.js');

router.get('/:search', function(req, res) {
  console.log("word",req.params)
  const search = req.params.search;
  // const {
  //   companyName,
  //   esparkHubLocation,
  //   primaryMentorFocusArea,
  //   industrySector,
  //   salesDistribution,
  //   stage,
  //   actionOutstanding
  // } = req.query;
  // console.log(req.query);
  // let search = {};
  // if(companyName) {
  //   search = {
  //     ...search,
  //     companyName
  //   }
  // }
  // if(esparkHubLocation) {
  //   search = {
  //     ...search,
  //     esparkHubLocation
  //   }
  // }
  // if(primaryMentorFocusArea) {
  //   search = {
  //     ...search,
  //     primaryMentorFocusArea
  //   }
  // }
  // if(industrySector) {
  //   search = {
  //     ...search,
  //     industrySector
  //   }
  // }
  // if(salesDistribution) {
  //   search = {
  //     ...search,
  //     salesDistribution
  //   }
  // }
  // if(stage) {
  //   search = {
  //     ...search,
  //     stage
  //   }
  // }
  // if(actionOutstanding) {
  //   search = {
  //     ...search,
  //     actionOutstanding
  //   }
  // }
  //search
  Company.find({ $or: [
    {companyName: search},
    {stage: search},
    {actionOutstanding: search},
    {industrySector: search},
    {salesDistribution: search},
    {primaryMentorFocusArea: search},
    {esparkHubLocation: search},
  ]}, (err, companies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(companies);
    }
  });
})


// router.post('/', (req, res) => {
//   console.log('REQ BODY:')
//   console.log(req.body)
//   const comp = new Company(req.body);
//   console.log(comp);
//   comp.save(req.body, (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })

module.exports = router;
