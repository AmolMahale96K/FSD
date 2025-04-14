const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { name, email, mobile, department } = req.body;
  
  if (!name.match(/^[A-Za-z]+$/)) {
    return res.send('Name must contain only alphabets.');
  }
  if (!email.includes('@')) {
    return res.send('Invalid email format.');
  }
  if (!mobile.match(/^[0-9]{10}$/)) {
    return res.send('Mobile must be 10 digits.');
  }
  if (!department) {
    return res.send('Department is required.');
  }

  res.send('Employee Registered Successfully!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Registration</title>
  <script>
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
      const department = document.getElementById('department').value;

      if (!name.match(/^[A-Za-z]+$/)) {
        alert('Name must contain only alphabets');
        return false;
      }
      if (!email.includes('@')) {
        alert('Invalid email format');
        return false;
      }
      if (!mobile.match(/^[0-9]{10}$/)) {
        alert('Mobile must be 10 digits');
        return false;
      }
      if (!department) {
        alert('Department is required');
        return false;
      }
      return true;
    }
  </script>
</head>
<body>

  <h2>Employee Registration</h2>
  <form action="/register" method="POST" onsubmit="return validateForm()">
    <input type="text" id="name" name="name" placeholder="Name" required><br><br>
    <input type="email" id="email" name="email" placeholder="Email" required><br><br>
    <input type="text" id="mobile" name="mobile" placeholder="Mobile (10 digits)" required><br><br>
    <input type="text" id="department" name="department" placeholder="Department" required><br><br>
    <button type="submit">Register</button>
  </form>

</body>
</html>


npm init -y
npm install express body-parser
