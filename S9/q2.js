const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to handle errors
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

// Route to handle file request
app.get('/file', (req, res) => {
  // Extract the file name from the query string (e.g., ?filename=example.txt)
  const filename = req.query.filename;

  if (!filename) {
    return res.status(400).send('No filename provided.');
  }

  const filePath = path.join(__dirname, filename);

  // Try reading the requested file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If an error occurs (e.g., file not found), send a 404 response
      return res.status(404).send('File not found or could not be read.');
    }

    // Return the file content if successfully read
    res.send(data);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
