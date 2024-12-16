const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  meterId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Client', clientSchema);
