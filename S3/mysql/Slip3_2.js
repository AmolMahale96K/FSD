const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.get('/teachers', (req, res) => {
  db.query('SELECT * FROM Teacher', (err, results) => {
    if (err) 
        return res.send('Error fetching teachers');
    res.json(results);
  });
});

app.get('/highsalary', (req, res) => {
  db.query('SELECT * FROM Teacher WHERE salary > 200000', (err, results) => {
    if (err) 
        return res.send('Error fetching high salary teachers');
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



// CREATE TABLE Teacher (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     subject VARCHAR(100),
//     salary DECIMAL(10,2)
//   );

  
//   INSERT INTO Teacher (name, subject, salary) VALUES
// ('Anita Sharma', 'Mathematics', 180000),
// ('Ravi Patel', 'Physics', 220000),
// ('Sunita Rao', 'Chemistry', 250000),
// ('Amit Kumar', 'Biology', 190000),
// ('Neha Joshi', 'English', 210000);
