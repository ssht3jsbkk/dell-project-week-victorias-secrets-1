const mongoose = require("mongoose");

const notesSchema = {
  "Comment ID": Number,
  "Comment Date" Date,
  "Comment": String,
  "Action": String,
  "Company ID"  Number,
  "Mentor Name": String
}

var Notes = mongoose.model('Notes', mongoose.Schema(notesSchema));

module.exports = Notes;
