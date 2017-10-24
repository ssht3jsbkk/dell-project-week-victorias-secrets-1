const mongoose = require("mongoose");



const compSchema = {
  "Company Id": Number,
  "Company name": String,
  "Date Added": Date,
  "Contact Surname": String,
  "Contact Firstname": String,
  "Email Address": String,
  "Phone number": Number,
  "Website address": String,
  "Twitter": String,
  "Espark hub location": String,
  "Primary Mentor Focus Area": String,
  "Industry sector": String,
  "Sales Distribution": String,
  "Stage": String,
  "Action Outstanding": String
}
var Comp = mongoose.model('Comp', mongoose.Schema(compSchema));

module.exports = company;
