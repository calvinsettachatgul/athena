# activate psql using a specific database
psql <database_name>
psql calvin

# create a new database
calvin# create database <new_database_name>;
calvin# create database new_database;

# create a new table 
calvin# create table <new_table_name>;
calvin# create table new_table_name;

# create new table with attributes

create table users (
    firstName varchar(40), 
    lastName varchar(40), 
    email varchar(40)
);

# insert into table users
insert into users values ('calvin', 'settachatgul', 'calvin.settachatgul@gmail.com');
