const mongoose = require("mongoose");



const userSchema = {
  firstName: String,
  surname: String,
  email: String,
  phone: Number,
  focusArea: String,
  esparkHubLocation: String,
  username: String,
  password: String
}

var users = mongoose.model('users', mongoose.Schema(userSchema));


module.exports = users;
