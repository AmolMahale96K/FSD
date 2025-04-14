const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL user
  password: 'yourpassword', // Replace with your MySQL password
  database: 'yourdatabase' // Replace with your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Query to select all records from the 'customers' table
connection.query('SELECT * FROM customers', (err, results) => {
  if (err) {
    console.error('Error fetching records:', err);
    return;
  }
  console.log('Customer Records:', results);
});

// Close the connection after the query
connection.end();
