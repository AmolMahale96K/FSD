const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college',
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  connection.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
});
