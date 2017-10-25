const mongoose = require("mongoose");



const userSchema = {
  firstName: String,
  surname: String,
  email: String,
  phone: Number,
  focusArea: String,
  esparkHubLocation: String
}
var Users = mongoose.model('Users', mongoose.Schema(userSchema));

module.exports = Users;
