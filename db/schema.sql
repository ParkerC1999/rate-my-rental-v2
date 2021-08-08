DROP DATABASE IF EXISTS rate_my_rental_v2;
CREATE DATABASE rate_my_rental_v2;
-- USE rate_my_rental_db;

-- CREATE TABLE properties (
--     id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     number_of_bedrooms DECIMAL(10) NOT NULL,
--     number_of_bathrooms  DECIMAL(10) NOT NULL,
--     property_type VARCHAR(30) NOT NULL,
--     square_footage DECIMAL(10) NOT NULL,
--     year_built DECIMAL(10) NOT NULL,
--     location_address VARCHAR(30) NOT NULL,
--     location_city VARCHAR(30) NOT NULL,
--     location_state VARCHAR(30) NOT NULL,
--     zip_code DECIMAL(10) NOT NULL,
--     parking_type VARCHAR(30),
--     parking_spaces DECIMAL(10),
--     homeowners_association VARCHAR(30) NOT NULL,
--     hoa_fee DECIMAL(10),
--     utilities VARCHAR(30) NOT NULL,
--     rent_ammount DECIMAL(10) NOT NULL,
-- );

-- CREATE TABLE landlords (
--     id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     company_name VARCHAR(30)
--     number_of_properties DECIMAL(10) NOT NULL,
--     contact_info DECIMAL(10) NOT NULL,    
-- );