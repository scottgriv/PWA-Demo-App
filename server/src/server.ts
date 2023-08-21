import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'demo',
  host: 'localhost',
  database: 'db_web_app',
  password: 'devdemo123',
  port: 5432,
});

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    console.log('Fetched users:', rows); // Log the fetched rows
    res.json(rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});