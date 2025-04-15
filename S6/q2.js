const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.url);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('404 Not Found');
    } else {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading the file');
        } else {
          res.type('text/plain').send(data);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
