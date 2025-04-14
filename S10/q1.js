const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost', // MySQL host (localhost)
  user: 'root', // MySQL username
  password: 'your_mysql_password' // MySQL password (replace with your actual password)
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
  
  // Create the college database
  const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS college';
  
  connection.query(createDatabaseQuery, (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database "college" created or already exists');
    
    // Use the college database
    connection.changeUser({ database: 'college' }, (err) => {
      if (err) {
        console.error('Error selecting database:', err);
        return;
      }

      // Create the students table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          age INT,
          course VARCHAR(100)
        )
      `;

      connection.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
        console.log('Table "students" created or already exists');
        
        // Close the connection
        connection.end();
      });
    });
  });
});
