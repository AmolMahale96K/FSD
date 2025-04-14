// teacher-query.js
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // replace with your DB user
  password: '',        // replace with your DB password
  database: 'school'   // replace with your DB name
});

// Connect
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  const query = "SELECT * FROM Teacher WHERE salary > 20000";

  db.query(query, (err, results) => {
    if (err) throw err;

    console.log("Teachers with salary > 20000:");
    console.table(results);
  });
});
