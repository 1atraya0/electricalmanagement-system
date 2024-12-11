// server/server.js
const express = require('express');
const connectDB = require('./db');
const app = express();
const cors = require('cors');

require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/client', require('./routes/client'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
