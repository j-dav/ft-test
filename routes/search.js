const express = require('express');

const router = express.Router();
const fetchHeadlines = require('../utils/search');

router.get('/search', async (req, res) => {
  const query = req.query.q;
  const results = await fetchHeadlines(query);
  res.render('index', { query, results, layout: 'default' });
});

module.exports = router;
