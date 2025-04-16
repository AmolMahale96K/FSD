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

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) return res.send('Error while registering user.');
    res.send('Registered successfully.');
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.send('Login error.');
    if (results.length > 0) {
      res.send('Login successful.');
    } else {
      res.send('Invalid credentials.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
