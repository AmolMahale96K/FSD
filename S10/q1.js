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

  connection.query('CREATE DATABASE IF NOT EXISTS college', (err) => {
    if (err) throw err;

    connection.changeUser({ database: 'college' }, (err) => {
      if (err) throw err;

      const sql = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          age INT,
          department VARCHAR(50)
        )
      `;

      connection.query(sql, (err) => {
        if (err) throw err;
        console.log('students table ready');
        connection.end();
      });
    });
  });
});
