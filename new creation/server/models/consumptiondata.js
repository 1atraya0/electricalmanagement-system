// server/models/consumptionDataModel.js
const mongoose = require('mongoose');

const consumptionDataSchema = new mongoose.Schema({
  name: String,
  units: Number,
  revenue: Number,
});

module.exports = mongoose.model('ConsumptionData', consumptionDataSchema);
