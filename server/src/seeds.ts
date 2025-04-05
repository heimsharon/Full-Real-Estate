import pool from './db.js';

const seedDatabase = async () => {
  try {
    console.log('Seeding database...');

    // Create the properties table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id SERIAL PRIMARY KEY,
        address VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        image VARCHAR(255),
        description TEXT
      );
    `);

    // Insert sample data into the properties table
    await pool.query(`
      INSERT INTO properties (address, price, image, description)
      VALUES
        ('112 Coventry Ln', 350000, '/assets/112 Coventry ln.webp', 'A beautiful 3-bedroom home with a spacious backyard.'),
        ('1252 Biltmore Dr', 450000, '/assets/1252 Biltmore Dr.jpg', 'A modern 4-bedroom house in a quiet neighborhood.'),
        ('789 Elm St', 275000, '/assets/789 Elm St.jpg', 'A cozy 2-bedroom home perfect for small families.')
      ON CONFLICT DO NOTHING;
    `);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();