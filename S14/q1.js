// Load the http module to create a web server
const http = require('http');

// Create a server and respond with a simple message
const server = http.createServer((req, res) => {
  // Set the HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message
  res.end('Hello, this is a simple web server created using Node.js!\n');
});

// Define the port and host for the server
const port = 3000;
const host = '127.0.0.1';

// Start the server and listen for incoming requests
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
    