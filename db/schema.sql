### Schema

CREATE DATABASE IF NOT EXISTS burger_db;

CREATE TABLE IF NOT EXISTS burger_db.burgers (
	id int NOT NULL auto_increment,
    burger_name text NOT NULL,
    devoured boolean NOT NULL,
    PRIMARY KEY (id)
);