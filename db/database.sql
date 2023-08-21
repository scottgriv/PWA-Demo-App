-- This is a demo SQL file, adjust as needed.

-- Database: db_web_app
-- DROP DATABASE IF EXISTS db_web_app;

CREATE DATABASE db_web_app
    WITH
    OWNER = demo
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Role: demo (no password)
-- DROP ROLE IF EXISTS demo;

CREATE ROLE demo WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION

-- Table: users
-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert: users
INSERT INTO users (first_name, last_name, email) VALUES ('John', 'Doe', 'john.doe@example.com');
INSERT INTO users (first_name, last_name, email) VALUES ('Jane', 'Smith', 'jane.smith@example.com');

-- Select: users
SELECT * FROM users;