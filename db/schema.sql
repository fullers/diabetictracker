CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABlE users
(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL,
	passoword VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	doctor BOOLEAN default false,
	PRIMARY KEY (id)
);

CREATE TABlE doctors
(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE data
(
	id INT AUTO_INCREMENT NOT NULL,
	entry_date Date NOT NULL,
	entry_time time NOT NULL,
	PRIMARY KEY (id)
);