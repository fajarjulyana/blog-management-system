// app.js
const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang Anda inginkan
const ejs = require('ejs');
const dashboardRoute = require('./routes/dashboardRoute');
const blogRoute = require('./routes/blogRoute');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', dashboardRoute);
app.use('/', blogRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
