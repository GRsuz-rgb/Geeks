/*
// server/config/db.js
import pkg from 'pg';
const { Pool } = pkg;

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',           
  database: 'bookdb',          
  password: 'your_pg_password', 
  port: 3000                   
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  release();
});

export default pool;
*/




import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export default db;
