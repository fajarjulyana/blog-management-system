// models/dashboardModel.js
const db = require('../db');

const getDashboardData = (callback) => {
  const query = 'SELECT * FROM blogs';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getDashboardData
};
