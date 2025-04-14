// CREATE DATABASE user_db;

// USE user_db;

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL
// );



const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Replace with your MySQL username
    password: '',  // Replace with your MySQL password
    database: 'user_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle registration (POST)
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            return res.status(500).send('Error checking user existence');
        }

        if (result.length > 0) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return res.status(500).send('Error hashing password');

            // Store user in the database
            const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
            db.query(query, [username, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).send('Error registering user');
                }
                res.status(200).send('User registered successfully');
            });
        });
    });
});

// Route to handle login (POST)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            return res.status(500).send('Error checking user credentials');
        }

        if (result.length === 0) {
            return res.status(400).send('User does not exist');
        }

        // Compare password with stored hash
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (err) return res.status(500).send('Error comparing passwords');

            if (isMatch) {
                res.status(200).send('Login successful');
            } else {
                res.status(400).send('Incorrect password');
            }
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
