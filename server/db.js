const mysql = require('mysql2');

// Create connection to MySQL database using XAMPP defaults
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Default XAMPP MySQL password is empty
  database: 'new_model'
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database: new_model');
});

module.exports = db;