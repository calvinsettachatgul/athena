# Postgresql Database

CREATE TABLE users (
  firstname varchar(80),
  lastname varchar(80),
  nickname varchar(80),
  email varchar(80)
);

insert into users values('calvin', 'settachatgul', 'cal', 'calvin.settachatgul@gmail.com');
insert into users values('stanley', 'chan', 'stan', 'stan@example.com');

users = [
  {
    'firstname':'calvin',
    'lastname':'settachatgul', 
    'nickname':'cal', 
    'email': 'calvin.settachatgul@gmail.com'
  },
  {
    'firstname':'stanley',
    'lastname':'chan', 
    'nickname':'stan', 
    'email': 'stan@example.com'
  }
]
