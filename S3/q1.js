npm install express path body-parser

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Hardcoded credentials for demo
const USER = {
  email: 'user@example.com',
  password: '123456'
};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Login handler
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.send(`<h3>Login Successful</h3><p>Welcome, ${email}!</p>`);
  } else {
    res.send('<h3>Login Failed</h3><p>Invalid email or password.</p>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
