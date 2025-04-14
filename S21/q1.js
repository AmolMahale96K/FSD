// Import mysql2 module
const mysql = require('mysql2');

// Create a connection to MySQL server
const connection = mysql.createConnection({
  host: 'localhost',     // MySQL server address
  user: 'root',          // MySQL username
  password: '',          // MySQL password (leave blank if no password is set)
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  // Create a new database named 'movieDB'
  connection.query('CREATE DATABASE IF NOT EXISTS movieDB', (err, result) => {
    if (err) {
      console.error('Error creating database: ' + err.stack);
      return;
    }
    console.log('Database "movieDB" created or already exists.');

    // Switch to the 'movieDB' database
    connection.query('USE movieDB', (err) => {
      if (err) {
        console.error('Error selecting database: ' + err.stack);
        return;
      }

      // Create 'movies' table with relevant columns
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS movies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          director VARCHAR(255) NOT NULL,
          release_year INT NOT NULL,
          genre VARCHAR(100)
        )
      `;
      connection.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Error creating table: ' + err.stack);
          return;
        }
        console.log('Table "movies" created or already exists.');

        // Insert sample movie data into the 'movies' table
        const insertQuery = `
          INSERT INTO movies (title, director, release_year, genre)
          VALUES 
            ('Inception', 'Christopher Nolan', 2010, 'Science Fiction'),
            ('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama'),
            ('The Dark Knight', 'Christopher Nolan', 2008, 'Action'),
            ('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime')
        `;
        connection.query(insertQuery, (err, result) => {
          if (err) {
            console.error('Error inserting data: ' + err.stack);
            return;
          }
          console.log('Sample movie data inserted.');

          // Close the connection
          connection.end();
        });
      });
    });
  });
});
