const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Define the file path (relative to the current script)
  const filePath = path.join(__dirname, 'index.html');

  // Check if the requested file exists
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Read the content of the file and serve it as an HTTP response
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Page Not Found');
    }
  });
});

// Define the port for the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
