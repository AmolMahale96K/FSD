const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  connection.query('CREATE DATABASE IF NOT EXISTS Movie', (err) => {
    if (err) throw err;

    connection.changeUser({ database: 'Movie' }, (err) => {
      if (err) throw err;

      const sql = `
        CREATE TABLE IF NOT EXISTS movies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(100),
          genre VARCHAR(50),
          release_year INT
        )
      `;

      connection.query(sql, (err) => {
        if (err) throw err;
        console.log('movies table ready');
        connection.end();
      });
    });
  });
});
