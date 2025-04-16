const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

db.connect((err) => {
  // if (err) throw err;
  console.log('MySQL Connected...');
});


// Register
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err)
       return res.send('<h3 style="color:red;">❌ Error while registering user!</h3>');
    res.send('<h3 style="color:green;">✅ Registered successfully!</h3>');
  });
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err)
       return res.send('<h3 style="color:red;">❌ Login error!</h3>');
    if (results.length > 0) {
      res.send('<h3 style="color:green;">✅ Login successful!</h3>');
    } else {
      res.send('<h3 style="color:red;">❌ Invalid credentials!</h3>');
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});





// Create table if not exists

  
