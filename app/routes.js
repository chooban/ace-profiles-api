const express = require('express');
const router = express.Router();

const getSearches = (req, res) => {
  res.json('Hello, world!');
};

const updateSearches = (req, res) => {
  res.json('Hello, world!');
};

router.get('/savedsearches', getSearches);
router.post('/savedsearches', updateSearches)

module.exports = router;
