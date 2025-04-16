
//server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'elearning'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// POST Book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], (err) => {
    if (err) return res.send('Error adding book');
    res.send('Book added');
  });
});

// GET Books
app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.send('Error fetching books');
    res.json(results);
  });
});

// POST Course
app.post('/courses', (req, res) => {
  const { name, instructor } = req.body;
  db.query('INSERT INTO courses (name, instructor) VALUES (?, ?)', [name, instructor], (err) => {
    if (err) return res.send('Error adding course');
    res.send('Course added');
  });
});

// GET Courses
app.get('/courses', (req, res) => {
  db.query('SELECT * FROM courses', (err, results) => {
    if (err) return res.send('Error fetching courses');
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
