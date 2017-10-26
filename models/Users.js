const mongoose = require("mongoose");



const userSchema = {
  firstName: String,
  surname: String,
  email: String,
  phone: Number,
  focusArea: String,
  esparkHubLocation: String
}

var users = mongoose.model('user', mongoose.Schema(userSchema));


module.exports = Users;
