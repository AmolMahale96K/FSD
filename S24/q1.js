npm init -y
npm install express mysql2 bcryptjs express-session



const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'elearning'
});

// Connect to the database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Set up EJS for views
app.set('view engine', 'ejs');

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the eLearning System</h1>
    <a href="/register">Register</a> | 
    <a href="/login">Login</a>
  `);
});

// Registration route
app.get('/register', (req, res) => {
  res.send(`
    <h1>Register</h1>
    <form action="/register" method="POST">
      <label>Username:</label><br>
      <input type="text" name="username" required><br><br>
      <label>Email:</label><br>
      <input type="email" name="email" required><br><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br><br>
      <button type="submit">Register</button>
    </form>
  `);
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) throw err;
    res.redirect('/login');
  });
});

// Login route
app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <label>Email:</label><br>
      <input type="email" name="email" required><br><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0 && bcrypt.compareSync(password, result[0].password)) {
      req.session.userId = result[0].id;
      res.redirect('/courses');
    } else {
      res.send('Invalid credentials');
    }
  });
});

// Courses page
app.get('/courses', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  const sql = 'SELECT * FROM courses';
  db.query(sql, (err, result) => {
    if (err) throw err;
    let courseHtml = '<h1>Courses Available</h1><ul>';
    result.forEach(course => {
      courseHtml += `<li>${course.name} - <form method="POST" action="/enroll"><input type="hidden" name="courseId" value="${course.id}"><button type="submit">Enroll</button></form></li>`;
    });
    courseHtml += '</ul>';
    res.send(courseHtml);
  });
});

// Enroll in course
app.post('/enroll', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  const courseId = req.body.courseId;
  const userId = req.session.userId;
  const sql = 'INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)';
  db.query(sql, [userId, courseId], (err, result) => {
    if (err) throw err;
    res.redirect('/courses');
  });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});




CREATE DATABASE elearning;

USE elearning;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
