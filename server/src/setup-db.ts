import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './db.js';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to run an SQL file
const runSQLFile = async (filePath: string) => {
  const sql = fs.readFileSync(filePath, 'utf-8');
  await pool.query(sql);
};

// Main function to set up the database
const setupDatabase = async () => {
  try {
    console.log('Setting up the database...');

    // Run schema.sql
    const schemaPath = path.join(__dirname, '../db/schema.sql');
    await runSQLFile(schemaPath);
    console.log('Schema created successfully.');

    // Run inserts.sql
    const insertsPath = path.join(__dirname, '../db/inserts.sql');
    await runSQLFile(insertsPath);
    console.log('Data inserted successfully.');

    console.log('Database setup complete.');
    process.exit(0);
  } catch (err) {
    console.error('Error setting up the database:', err);
    process.exit(1);
  }
};

setupDatabase();