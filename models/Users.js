const mongoose = require("mongoose");



const userSchema = {
  "First name": String,
  "Surname": String,
  "Email": String,
  "Phone": Number,
  "Focus Area": String,
  "Espark hub location": String
}
var Users = mongoose.model('User', mongoose.Schema(userSchema));

module.exports = users;
