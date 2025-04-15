<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Upload File</title>
</head>
<body>
  <h1>Upload a File</h1>
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="myfile" required>
    <br><br>
    <input type="submit" value="Upload">
  </form>
</body>
</html>


// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Multer setup
const upload = multer({ dest: 'uploads/' }); // files go to 'uploads/' folder

// Handle file upload
app.post('/upload', upload.single('myfile'), (req, res) => {
  res.send('File uploaded successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
