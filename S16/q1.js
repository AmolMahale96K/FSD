const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Predefined object to store recipes
let recipes = [
  {
    title: 'Pasta',
    ingredients: 'Pasta, Tomato Sauce, Olive Oil, Salt',
    instructions: 'Boil pasta. Heat sauce. Mix together.',
  },
  {
    title: 'Salad',
    ingredients: 'Lettuce, Tomato, Cucumber, Dressing',
    instructions: 'Chop veggies. Mix with dressing.',
  }
];

// Route to view all recipes
app.get('/recipes', (req, res) => {
  let recipeList = '<h1>Recipe Book</h1>';
  
  if (recipes.length > 0) {
    recipes.forEach((recipe) => {
      recipeList += `
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <hr>
      `;
    });
  } else {
    recipeList += '<p>No recipes available.</p>';
  }
  
  res.send(recipeList);
});

// Route to add a new recipe
app.post('/add-recipe', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  
  if (!title || !ingredients || !instructions) {
    return res.status(400).send('All fields are required');
  }
  
  const newRecipe = { title, ingredients, instructions };
  
  // Push new recipe into the predefined recipes array
  recipes.push(newRecipe);
  
  res.send('Recipe added successfully! <a href="/recipes">View Recipes</a>');
});

// Route to show the form for adding recipes
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Recipe Book</title>
      </head>
      <body>
        <h1>Recipe Book</h1>
        <h2>Add New Recipe</h2>
        <form action="/add-recipe" method="POST">
          <label for="title">Recipe Title:</label>
          <input type="text" id="title" name="title" required><br><br>
          
          <label for="ingredients">Ingredients:</label>
          <textarea id="ingredients" name="ingredients" required></textarea><br><br>
          
          <label for="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" required></textarea><br><br>
          
          <button type="submit">Add Recipe</button>
        </form>
        <br><br>
        <a href="/recipes">View All Recipes</a>
      </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
