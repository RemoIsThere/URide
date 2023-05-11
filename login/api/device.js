const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  id: String,
  name: String,
  phone_number: String,
  number_of_people: String,
  place: String,
  role: String
}, { collection: 'topic4' }));