// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/append', (req, res) => {
  const file1 = req.body.file1;
  const file2 = req.body.file2;

  // Check if both files exist
  if (!fs.existsSync(file1)) {
    return res.send(`Source file "${file1}" not found.`);
  }

  if (!fs.existsSync(file2)) {
    return res.send(`Destination file "${file2}" not found.`);
  }

  // Read from file1 and append to file2
  const content = fs.readFileSync(file1, 'utf8');
  fs.appendFileSync(file2, content);

  res.send(`Successfully appended contents of "${file1}" into "${file2}".`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
