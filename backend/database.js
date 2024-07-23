import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Ensure dotenv is loaded
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

export async function fetchUsers() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
}

async function logUsers() {
    try {
        const result = await fetchUsers();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

logUsers();

export default pool;
