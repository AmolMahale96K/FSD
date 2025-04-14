const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Route to download file
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'sample.pdf'); // Replace with your file name
  res.download(filePath, 'downloaded_sample.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Something went wrong!');
    }
  });
});

// Root route
app.get('/', (req, res) => {
  res.send('<h2>Click <a href="/download">here</a> to download the file.</h2>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
