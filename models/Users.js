const mongoose = require("mongoose");



const userSchema = {
  /**
 * @typedef {Schema} for users which link to the 'users collection' in Mlab
 * @property {number}
 * @property {string}
 */
  firstName: String,
  surname: String,
  email: String,
  phone: Number,
  focusArea: String,
  esparkHubLocation: String
}
var Users = mongoose.model('Users', mongoose.Schema(userSchema));
/**
 * @todo links the schema to the users collection in mlab.
 */
module.exports = Users;
