const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create users table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table ready');
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'EchoWave Backend Server is running!' });
});

// POST /signup route
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters long'
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user into database (matching actual table structure)
    const query = `
      INSERT INTO users (first_name, last_name, email, password_hash, created_at)
      VALUES (?, ?, ?, ?, NOW())
    `;

    db.query(query, [firstName, lastName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Database error:', err);

        // Handle duplicate email error
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({
            error: 'Email already exists. Please use a different email address.'
          });
        }

        return res.status(500).json({
          error: 'Database error occurred'
        });
      }

      console.log('User created successfully:', result.insertId);
      res.status(201).json({
        message: 'User registered successfully',
        userId: result.insertId
      });
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// POST /login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    // Query user from database
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          error: 'Database error occurred'
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          error: 'Invalid email or password'
        });
      }

      const user = results[0];

      // Compare password with hashed password from database
      const isValidPassword = await bcrypt.compare(password, user.password_hash);
      if (!isValidPassword) {
        return res.status(401).json({
          error: 'Invalid email or password'
        });
      }

      // Login successful
      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email
        }
      });
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available routes:');
  console.log('POST /signup - Register a new user');
  console.log('POST /login - Login user');
});