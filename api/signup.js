const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Create database connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'new_model'
    });

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user into database
    try {
      await connection.execute(
        'INSERT INTO users (first_name, last_name, email, password_hash, created_at) VALUES (?, ?, ?, ?, NOW())',
        [firstName, lastName, email, hashedPassword]
      );

      await connection.end();

      res.status(201).json({
        message: 'User registered successfully'
      });
    } catch (error) {
      await connection.end();

      // Handle duplicate email error
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
          error: 'Email already exists. Please use a different email address.'
        });
      }

      throw error;
    }

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}