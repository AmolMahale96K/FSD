const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).send('404 Not Found');
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
