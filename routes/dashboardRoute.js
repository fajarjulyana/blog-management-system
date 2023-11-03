// routes/dashboardRoute.js
const express = require('express');
const router = express.Router();
const dashboardModel = require('../models/dashboardModel');

router.get('/dashboard', (req, res) => {
  dashboardModel.getDashboardData((err, data) => {
    if (err) {
      console.error('Error fetching data from database: ' + err);
      return res.status(500).send('Internal Server Error');
    }
    res.render('dashboard', { data: data });
  });
});

module.exports = router;
