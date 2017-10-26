const mongoose = require("mongoose");

const notesSchema = {

  commentDate: Date,
  comment: String,
  action: String,
  companyName: String,
  mentorName: String
}

var Notes = mongoose.model('Notes', mongoose.Schema(notesSchema));

module.exports = Notes;
