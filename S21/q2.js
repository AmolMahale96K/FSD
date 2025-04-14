const express = require('express');
const path = require('path');
const app = express();

// Serve static files (optional if you want to serve any front-end files)
app.use(express.static('public'));

// Route to handle file download
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'sample.txt'); // Specify the file path
  res.download(filePath, 'sample.txt', (err) => {
    if (err) {
      console.error('File download error:', err);
      res.status(500).send('Error downloading the file.');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
