import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.get('/projects', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows)
        console.log(result.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});