const mongoose = require("mongoose");

const notesSchema = {
  /**
 * @typedef {Schema} for notes which link to the 'notes collection' in Mlab
 * @property {date}
 * @property {string}
 */
  commentDate: Date,
  comment: String,
  action: String,
  companyName: String,
  mentorName: String
}

var Notes = mongoose.model('Notes', mongoose.Schema(notesSchema));
/**
 * @todo links the schema to the notes collection in mlab.
 */
module.exports = Notes;
