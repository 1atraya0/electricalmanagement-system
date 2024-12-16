// server/routes/consumptionDataRoutes.js
const express = require('express');
const router = express.Router();
const ConsumptionData = require('../models/consumptionDataModel');

router.get('/', async (req, res) => {
  try {
    const data = await ConsumptionData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
