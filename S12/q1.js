const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb',  // replace with your actual database name
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  connection.query('SELECT * FROM customers', (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
});
