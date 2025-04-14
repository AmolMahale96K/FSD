// Import the mysql2 package
const mysql = require('mysql2');

// Create a connection to MySQL server (without selecting a database yet)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password', // replace with your MySQL root password
});

// Connect to MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL server.');

  // Step 1: Create the Movie database
  connection.query('CREATE DATABASE IF NOT EXISTS MovieDB', (err, result) => {
    if (err) throw err;
    console.log('🎬 MovieDB database created or already exists.');

    // Step 2: Switch to MovieDB and create movies table
    const dbConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'your_mysql_password', // same password here
      database: 'MovieDB',
    });

    dbConnection.connect((err) => {
      if (err) throw err;
      console.log('📂 Connected to MovieDB database.');

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS movies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          genre VARCHAR(100),
          release_year INT,
          rating DECIMAL(3,1)
        )
      `;

      dbConnection.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log('📽️ movies table created successfully.');
        dbConnection.end();
      });
    });
  });
});
