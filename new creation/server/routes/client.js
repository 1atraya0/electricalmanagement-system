const express = require('express');
const router = express.Router();

// Sample client route
router.get('/', (req, res) => {
  res.send('Client Page');
});

module.exports = router;
