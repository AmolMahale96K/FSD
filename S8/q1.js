// Import the express module
const express = require('express');

// Create an Express app
const app = express();

// Set up a route to handle GET requests at the root URL "/"
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express-based Node.js server!</h1>');
});

// Define the port number where the server will listen
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
