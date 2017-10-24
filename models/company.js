const mongoose = require("mongoose");

const location = ['Belfast', 'Ayr','Glasglow','Edingburgh', 'Newcastle','Leeds','Manchester','Birmingham','Milton Keynes', 'Cardiff','Bristol','Brighton','London']

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
  primaryMentorFocusArea: String,
  industrySector: String,
  salesDistribution: String,
  stage: String,
  actionOutstanding: String
}

module.exports = mongoose.model('Company', mongoose.Schema(compSchema));
