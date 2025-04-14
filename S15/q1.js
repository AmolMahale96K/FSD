// Import the MySQL module
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',       // Hostname where the MySQL server is running
  user: 'root',            // MySQL username
  password: '',            // MySQL password
  database: 'your_database_name'  // The name of the database
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Query to select all records from the "students" table
const query = 'SELECT * FROM students';

// Execute the query
connection.query(query, (err, results) => {
  if (err) {
    console.error('Error fetching data: ' + err.stack);
    return;
  }
  // Display the results in the console
  console.log('Students Data:', results);
});

// Close the connection
connection.end();
