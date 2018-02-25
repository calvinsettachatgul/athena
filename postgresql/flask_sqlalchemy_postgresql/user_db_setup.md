# creating the database and postgresql role 
## create a user with a password

> CREATE USER new_user WITH PASSWORD 'my_new_password';

### example
> CREATE USER postgres WITH PASSWORD 'postgres';

## verify role exists
### note usename not username

> SELECT usename FROM pg_user;

### create a database with db owner of role created previously

> CREATE DATABASE todo OWNER <new_user>;
### example
> CREATE DATABASE todo_app OWNER postgres;

source: 
http://www.patricksoftwareblog.com/database-using-postgresql-and-sqlalchemy/
