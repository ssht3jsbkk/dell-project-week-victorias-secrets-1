const mongoose = require("mongoose");

const location = ['Belfast', 'Ayr','Glasgow','Edingburgh', 'Newcastle','Leeds','Manchester','Birmingham','Milton Keynes', 'Cardiff','Bristol','Brighton','London']
const area = ['Application Development','Technology','Security','Sales and Marketing','Leverage Dell Ecosystem']
const sector = ['Arts','Lifestyle','Health','Ecommerce','Digital','Energy','Sports and Leisure','Charity','Retail','Manufacturing/Industrial','Technology','Transport and Storage','Construction and Real Estate','Financial Services','Food or Agribusiness']
const sales = ['B2B','B2C','BOTH']
const stage = ['Sprint','Enable','Grow','Scale','Alumni']
const action = ['Yes','No']

const compSchema = {
  companyId: Number,
  companyName: String,
  dateAdded: Date,
  contactSurname: String,
  contactFirstname: String,
  emailAddress: String,
  phoneNumber: Number,
  websiteAddress: String,
  twitter: String,
  esparkHubLocation: {type: String, enum: location},
  primaryMentorFocusArea: {type: String, enum: area},
  industrySector: {type: String, enum: sector},
  salesDistribution: {type: String, enum: sales},
  stage: {type: String, enum: stage},
  actionOutstanding: {type: String, enum: action}
}

module.exports = mongoose.model('Company', mongoose.Schema(compSchema));
