// modules.js
function getCurrentDateTime() {
    const currentDateTime = new Date();
    return currentDateTime.toString();
}

// Export the function so it can be used in other files
module.exports = {
    getCurrentDateTime
};



// server.js
const http = require('http');
const { getCurrentDateTime } = require('./modules'); // Import the custom module

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Respond with the current date and time
    res.write('<h1>Welcome to My Node.js Server</h1>');
    res.write('<p>Current Date and Time: ' + getCurrentDateTime() + '</p>');

    // End the response
    res.end();
});

// Define the server's port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
