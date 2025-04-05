-- Insert Users (Buyers, Sellers, and Agents)
INSERT INTO users (name, email, phone, user_type, password) VALUES
('Alice Johnson', 'alice.johnson@example.com', '123-456-7890', 'seller', '$2a$10$CwTycUXWue0Thq9StjUM0uJ8z9H8J6z8pQ2z9J8z9H8J6z8pQ2z9H'), -- Password: 123
('Bob Smith', 'bob.smith@example.com', '234-567-8901', 'seller', NULL),
('Charlie Brown', 'charlie.brown@example.com', '345-678-9012', 'agent', NULL),
('Diana Prince', 'diana.prince@example.com', '456-789-0123', 'agent', NULL),
('Ethan Hunt', 'ethan.hunt@example.com', '567-890-1234', 'buyer', NULL),
('Fiona Green', 'fiona.green@example.com', '678-901-2345', 'buyer', NULL),
('George White', 'george.white@example.com', '789-012-3456', 'seller', NULL),
('Hannah Blue', 'hannah.blue@example.com', '890-123-4567', 'agent', NULL),
('Ian Gray', 'ian.gray@example.com', '901-234-5678', 'buyer', NULL),
('Julia Gold', 'julia.gold@example.com', '012-345-6789', 'seller', NULL);

-- Insert Agents
INSERT INTO agents (user_id, agency_name, rating) VALUES
((SELECT user_id FROM users WHERE email='charlie.brown@example.com' LIMIT 1), 'Brown Realty', 4.9),
((SELECT user_id FROM users WHERE email='diana.prince@example.com' LIMIT 1), 'Prince & Co. Real Estate', 4.7),
((SELECT user_id FROM users WHERE email='hannah.blue@example.com' LIMIT 1), 'Blue Sky Realty', 4.8);

-- Insert Properties
INSERT INTO properties (description, price, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, agent_id, seller_id, status, image)
VALUES
('Modern 3-bedroom home with a spacious backyard and pool.', 450000.00, '123 Maple St', 'Orlando', 'FL', '32801', 'house', 3, 2, 2000, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='alice.johnson@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=1'),

('Luxury 5-bedroom estate with a private pool and home theater.', 1250000.00, '456 Oak Ave', 'Naples', 'FL', '34102', 'house', 5, 6, 5000, 
 (SELECT agent_id FROM agents WHERE agency_name='Prince & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='bob.smith@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=2'),

('Charming 2-bedroom condo with city views and modern amenities.', 275000.00, '789 Pine Blvd', 'Miami', 'FL', '33101', 'condo', 2, 2, 1200, 
 (SELECT agent_id FROM agents WHERE agency_name='Blue Sky Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='george.white@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=3'),

('Cozy 2-bedroom bungalow with a fenced yard and updated kitchen.', 240000.00, '101 Elm Ct', 'Fort Lauderdale', 'FL', '33301', 'house', 2, 1, 1100, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='julia.gold@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=4'),

('Spacious 4-bedroom townhouse in a gated community with a pool.', 320000.00, '202 Birch Ln', 'Tampa', 'FL', '33602', 'townhouse', 4, 3, 1800, 
 (SELECT agent_id FROM agents WHERE agency_name='Prince & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='alice.johnson@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=5'),

('Modern 2-bedroom loft with exposed brick and industrial design.', 295000.00, '303 Cedar St', 'St. Petersburg', 'FL', '33701', 'apartment', 2, 2, 1400, 
 (SELECT agent_id FROM agents WHERE agency_name='Blue Sky Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='ethan.hunt@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=6'),

('Elegant 6-bedroom mansion with a tennis court and wine cellar.', 2200000.00, '404 Spruce Dr', 'Boca Raton', 'FL', '33432', 'house', 6, 7, 7000, 
 (SELECT agent_id FROM agents WHERE agency_name='Prince & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='bob.smith@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=7'),

('Charming 3-bedroom house with a wraparound porch and garden.', 325000.00, '505 Willow Way', 'Sarasota', 'FL', '34236', 'house', 3, 2, 2000, 
 (SELECT agent_id FROM agents WHERE agency_name='Brown Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='ian.gray@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=8'),

('Beautiful 4-bedroom home with a lake view and open floor plan.', 475000.00, '606 Aspen Pl', 'Clearwater', 'FL', '33755', 'house', 4, 3, 2800, 
 (SELECT agent_id FROM agents WHERE agency_name='Blue Sky Realty' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='fiona.green@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=9'),

('Charming 1-bedroom apartment with a balcony and city views.', 180000.00, '707 Cypress Ln', 'Tampa', 'FL', '33605', 'apartment', 1, 1, 800, 
 (SELECT agent_id FROM agents WHERE agency_name='Prince & Co. Real Estate' LIMIT 1), 
 (SELECT user_id FROM users WHERE email='julia.gold@example.com' LIMIT 1), 'available', 'https://picsum.photos/300/200?random=10');