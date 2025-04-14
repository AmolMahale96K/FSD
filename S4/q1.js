// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let users = [];         // registered users
let courses = [         // available courses
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js for Beginners" },
  { id: 3, title: "Web Development with HTML/CSS" }
];

// ✅ Register new user
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ name, email, password, enrolledCourses: [] });
  res.json({ message: 'Registration successful!' });
});

// ✅ Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful!', user });
});

// ✅ List all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// ✅ Enroll in a course
app.post('/enroll', (req, res) => {
  const { email, courseId } = req.body;

  const user = users.find(u => u.email === email);
  const course = courses.find(c => c.id === courseId);

  if (!user || !course) {
    return res.status(400).json({ message: 'User or course not found' });
  }

  if (user.enrolledCourses.includes(courseId)) {
    return res.json({ message: 'Already enrolled in this course' });
  }

  user.enrolledCourses.push(courseId);
  res.json({ message: `Enrolled in ${course.title}` });
});

// ✅ Show user enrolled courses
app.get('/mycourses/:email', (req, res) => {
  const email = req.params.email;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const enrolled = courses.filter(c => user.enrolledCourses.includes(c.id));
  res.json({ enrolledCourses: enrolled });
});

app.listen(PORT, () => {
  console.log(`eLearning system running at http://localhost:${PORT}`);
});
