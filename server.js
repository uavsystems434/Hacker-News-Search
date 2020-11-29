const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname, 'build')));

app.get('/src', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);