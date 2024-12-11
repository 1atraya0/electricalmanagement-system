const express = require('express');
const router = express.Router();

// Sample admin route
router.get('/', (req, res) => {
  res.send('Admin Page');
});

module.exports = router;
