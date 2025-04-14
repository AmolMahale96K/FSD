const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // Get the requested file path from the URL
  const filePath = path.join(__dirname, req.url);

  // Check if the file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Read the file content and send it to the client
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          res.statusCode = 500; // Internal Server Error
          res.setHeader('Content-Type', 'text/plain');
          res.end('Error reading the file!');
        } else {
          res.statusCode = 200; // OK
          res.setHeader('Content-Type', 'text/plain');
          res.end(data); // Send the content of the file
        }
      });
    } else {
      // If the file does not exist, send a 404 error
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found');
    }
  });
});

// Start the server on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
