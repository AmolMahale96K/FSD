// Import MySQL2 package
const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',     // Your MySQL server address
  user: 'root',          // Your MySQL username
  password: '',          // Your MySQL password
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  // Create a new database called 'school'
  connection.query('CREATE DATABASE IF NOT EXISTS school', (err, result) => {
    if (err) {
      console.error('Error creating database: ' + err.stack);
      return;
    }
    console.log('Database created or already exists.');

    // Use the 'school' database
    connection.query('USE school', (err) => {
      if (err) {
        console.error('Error using database: ' + err.stack);
        return;
      }

      // Create 'students' table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          age INT NOT NULL,
          email VARCHAR(100),
          mobile VARCHAR(15)
        )
      `;

      connection.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Error creating table: ' + err.stack);
          return;
        }
        console.log('Table "students" created or already exists.');

        // Insert some sample student data
        const insertQuery = `
          INSERT INTO students (name, age, email, mobile)
          VALUES ('John Doe', 20, 'johndoe@example.com', '1234567890'),
                 ('Jane Smith', 22, 'janesmith@example.com', '9876543210')
        `;
        
        connection.query(insertQuery, (err, result) => {
          if (err) {
            console.error('Error inserting data: ' + err.stack);
            return;
          }
          console.log('Sample student data inserted.');
          
          // Close the connection
          connection.end();
        });
      });
    });
  });
});
