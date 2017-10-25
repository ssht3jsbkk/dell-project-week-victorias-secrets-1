const mongoose = require("mongoose");

const notesSchema = {
  commentId: Number,
  commentDate: Date,
  comment: String,
  action: String,
  companyId: Number,
  mentorName: String
}

var Notes = mongoose.model('Notes', mongoose.Schema(notesSchema));

module.exports = Notes;
