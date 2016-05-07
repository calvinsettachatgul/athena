# SQL Tutorial

### Examples in Each Chapter
### SQL Quiz Test
### SQL Quick Reference
### SQL Data Types
### W3Schools Exam

# Introduction to SQL

### What is SQL?
### What Can SQL do?
### SQL is a Standard - BUT....
### Using SQL in your Web Site
### RDBMS

# SQL Syntax

### Database Tables

### SQL Statements
	SELECT * FROM Customers;
### Keep in Mind That...
### Semicolon after SQL Statements?
### Some of the Most Important SQL Commands
	SELECT
	UPDATE
	DELETE
	INSERT INTO
	CREATE DATABASE
	ALTER DATABASE
	CREATE TABLE
	ALTER TABLE
	DROP TABLE
	CREATE INDEX
	DROP INDEX
	
# SQL SELECT Statement

### The SQL SELECT Statement

	used to select data from a database

### SQL SELECT Syntax

	SELECT column_name, column_name
	FROM table_name;

	and
	
	SELECT * FROM table_name;

### Demo Database

### SELECT Column Example

	SELECT CustomerName, City FROM Customers;

###  SELECT * Example

	SELECT * FROM Customers;

### Navigation in a Result-set

# SQL CREATE TABLE statement

### The SQL CREATE TABLE Statement
	
	CREATE TABLE

### SQL CREATE TABLE Syntax
	
	CREATE TABLE table_name
		(
		 	column_name1 data_type(size),
			column_name2 data_type(size),
			column_name3 datatype(size),
		);
	
	column_name name of the columns of the table
	data_type is what the column can hold ( varchar, integer, decimal, date, etc.)

###  CREATE TABLE Example

	table called "Persons"
	PersonID
	LastName
	FirstName, 
	Address,
	City

	CREATE TABLE statement:
		
	CREATE TABLE Persons
	(
	PersonID int,
	LastName varchar(255),
	FirstName varchar(255),
	Address varchar(255),
	City varchar(255),
	)
	
# SQL Constraints

### SQL Constraints

	if there is any violation between the constraint and the data action, action is aborted by the constraint.

	constraints can be specified when table is created (inside the CREATE Table statement) or after the table is created (inside the ALTAR TABLE statement).

### SQL CREATE TABLE + CONSTRAINT Syntax

	CREATE TABLE table_name
	(
	column_name1 data_type(size) constraint_name,
	column_name2 data_type(size) constraint_name,
	column_name3 data_type(size) constraint_name,
	);

	in SQL have the following constraints:
		NOT NULL
		UNIQUE
		PRIMARY KEY
		FOREIGN KEY
		CHECK
		DEFAULT
		

# SQL NOT NULL Constraint

### SQL NOT NULL Constraint

	Example
	
	CREATE TABLE PersonNotNull
	(
	P_Id int NOT NULL,
	LastName varchar(255) NOT NULL,
	FirstName varchar(255),
	Address varchar(255),
	City varchar(255),
	)
