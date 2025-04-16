CREATE DATABASE IF NOT EXISTS recipe_book;

USE recipe_book;

CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  ingredients TEXT,
  instructions TEXT
);



<!DOCTYPE html>
<html>
<head>
  <title>Add Recipe</title>
</head>
<body>
  <h2>Add a Recipe</h2>
  <form action="http://localhost:3000/add-recipe" method="POST">
    <label>Title:</label>
    <input type="text" name="title" required><br><br>

    <label>Ingredients:</label><br>
    <textarea name="ingredients" rows="4" cols="50" required></textarea><br><br>

    <label>Instructions:</label><br>
    <textarea name="instructions" rows="4" cols="50" required></textarea><br><br>

    <button type="submit">Add Recipe</button>
  </form>
</body>
</html>



const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recipe_book',
  port: 3306
});

db.connect(() => {
  console.log('MySQL Connected');
});

app.post('/add-recipe', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  db.query(
    'INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)',
    [title, ingredients, instructions],
    () => {
      res.send('<h2>✅ Recipe Added Successfully</h2>');
    }
  );
});

app.get('/recipes', (req, res) => {
  db.query('SELECT * FROM recipes', (err, results) => {
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
