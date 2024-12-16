// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const consumptionDataRoutes = require('./routes/consumptionDataRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(bodyParser.json());

app.use('/api/consumption-data', consumptionDataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
