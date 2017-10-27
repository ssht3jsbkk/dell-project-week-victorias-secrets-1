const mongoose = require("mongoose");

const location = ['Belfast', 'Ayr','Glasgow','Edingburgh', 'Newcastle','Leeds','Manchester','Birmingham','Milton Keynes', 'Cardiff','Bristol','Brighton','London']
const area = ['Application Development','Technology','Security','Sales and Marketing','Leverage Dell Ecosystem']


const userSchema = {
  firstName: String,
  surname: String,
  email: String,
  phone: Number,
  esparkHubLocation: {type: String, enum: location},
  focusArea: {type: String, enum: area},
  username: String,
  password: String
}

var users = mongoose.model('users', mongoose.Schema(userSchema));


module.exports = users;
