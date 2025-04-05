import fs from 'fs';
import path from 'path';
import pool from './db.js';

const runSQLFile = async (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`SQL file not found: ${filePath}`);
  }
  const sql = fs.readFileSync(filePath, 'utf-8');
  await pool.query(sql);
};

const setupDatabase = async () => {
  try {
    console.log('Setting up the database...');

    // Run schema.sql
    const schemaPath = path.join(__dirname, 'db', 'schema.sql');
    await runSQLFile(schemaPath);
    console.log('Schema created successfully.');

    // Run inserts.sql
    const insertsPath = path.join(__dirname, 'db', 'inserts.sql');
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