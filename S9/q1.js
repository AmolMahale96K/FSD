const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Concatenate Two Strings</h1>
        <form method="POST" action="/concatenate">
          <label for="string1">Enter First String: </label>
          <input type="text" name="string1" required>
          <br>
          <label for="string2">Enter Second String: </label>
          <input type="text" name="string2" required>
          <br>
          <input type="submit" value="Concatenate">
        </form>
      </body>
    </html>
  `);
});

// Handle form submission and concatenate strings
app.post('/concatenate', (req, res) => {
  const string1 = req.body.string1;
  const string2 = req.body.string2;
  const concatenatedString = string1 + " " + string2;
  
  res.send(`
    <html>
      <body>
        <h1>Result</h1>
        <p>The concatenated string is: <strong>${concatenatedString}</strong></p>
        <a href="/">Go back</a>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
