const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',  // Replace with your MySQL host
    user: 'root',       // Replace with your MySQL username
    password: '',       // Replace with your MySQL password
    database: 'your_database_name'  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
    
    // Select all customers whose name starts with 'A'
    const query = "SELECT * FROM customers WHERE name LIKE 'A%'";

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        
        console.log('Customers whose name starts with "A":');
        console.log(results);  // Display the result object
        
        // If you want to loop through the results:
        results.forEach((customer) => {
            console.log(`ID: ${customer.id}, Name: ${customer.name}`);
        });
    });
});

// Close the database connection
db.end();
