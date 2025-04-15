<!DOCTYPE html>
<html>
<head>
  <title>Upload Form</title>
</head>
<body>
  <h1>Upload a File</h1>
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="myfile" />
    <br><br>
    <input type="submit" value="Upload" />
  </form>
</body>
</html>



const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve index.html
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/upload') {
    // For now, just respond that the file was "received"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('File upload received (processing not implemented)');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
