-- Drop tables if they already exist (for resetting the database)
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS agents CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create Users Table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    user_type VARCHAR(20) CHECK (user_type IN ('buyer', 'seller', 'agent')) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Agents Table
CREATE TABLE agents (
    agent_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    agency_name VARCHAR(100) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0.0
);

-- Create Properties Table
CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    property_type VARCHAR(50) CHECK (property_type IN ('house', 'apartment', 'condo', 'townhouse')) NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms INT NOT NULL,
    square_feet INT NOT NULL,
    agent_id INT REFERENCES agents(agent_id) ON DELETE SET NULL,
    seller_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    status VARCHAR(20) CHECK (status IN ('available', 'sold', 'pending')) DEFAULT 'available',
    image VARCHAR(255)
);