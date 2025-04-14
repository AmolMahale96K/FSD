// modules.js - Define custom functions here

// Function to return today's date and time
function getDateTime() {
    const today = new Date();
    return today.toLocaleString();  // Return date and time in local string format
  }
  
  // Export the function to make it available externally
  module.exports = {
    getDateTime: getDateTime
  };

  



  // server.js - Main application file

const http = require('http');  // Built-in HTTP module
const myModule = require('./modules');  // Import custom module

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Get the current date and time using the function from our module
  const dateTime = myModule.getDateTime();

  // Send the current date and time as a response
  res.end(`Today's Date and Time: ${dateTime}`);
});

// Define the server's port and listen for incoming requests
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
