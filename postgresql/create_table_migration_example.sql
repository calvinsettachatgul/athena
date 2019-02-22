# creating a table users

# https://docs.sqlalchemy.org/en/latest/orm/session_basics.html#getting-a-session
# https://docs.sqlalchemy.org/en/latest/orm/extensions/declarative/basic_use.html
# https://docs.sqlalchemy.org/en/latest/orm/tutorial.html

create table users (
    id SERIAL PRIMARY KEY,
    first_name varchar(40), 
    last_name varchar(40), 
    email varchar(40) UNIQUE
);

insert into users(first_name, last_name, email) values ('calvin', 'settachatgul', 'calvin.settachatgul@gmail.com');
insert into users(first_name, last_name, email) values ('calv', 'sett', 'calvsett@gmail.com');
insert into users(first_name, last_name, email) values ('first1', 'last1', 'firstlast1@email.com');
insert into users(first_name, last_name, email) values ('first2', 'last2', 'firstlast2@email.com');
insert into users(first_name, last_name, email) values ('first3', 'last3', 'firstlast3@email.com');
insert into users(first_name, last_name, email) values ('first4', 'last4', 'firstlast4@email.com');
insert into users(first_name, last_name, email) values ('first5', 'last5', 'firstlast5@email.com');

drop table users;

https://docs.sqlalchemy.org/en/latest/orm/tutorial.html

from sqlalchemy import Column, Integer, String

from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class User(Base):
   __tablename__ = 'users'
   id = Column(Integer, primary_key=True)
   first_name = Column(String)
   last_name = Column(String)
   email = Column(String)
   def __repr__(self):
     return "{} {} {} {}".format(self.id, self.first_name, self.last_name, self.email)

# https://docs.sqlalchemy.org/en/latest/orm/session_basics.html#getting-a-session

def connect(user, password, db, host='localhost', port=5432):
    '''Returns a connection and a metadata object'''
    # We connect with the help of the PostgreSQL URL
    # postgresql://federer:grandestslam@localhost:5432/tennis
    url = 'postgresql://{}:{}@{}:{}/{}'
    url = url.format(user, password, host, port, db)

    # The return value of create_engine() is our connection object
    con = sqlalchemy.create_engine(url, client_encoding='utf8')

    # We then bind the connection to MetaData()
    meta = sqlalchemy.MetaData(bind=con, reflect=True)

    return con, meta

con, meta = connect('postgres', 'postgres', 'postgres')


>>> from sqlalchemy.orm import sessionmaker
>>> some_engine = create_engine('postgresql://postgres:postgres@loc
alhost/')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'create_engine' is not defined
>>> from sqlalchemy import create_engine
>>> some_engine = create_engine('postgresql://postgres:postgres@localhost/')
>>> Session = sessionmaker(bind=some_engine)
>>> session = Session()
>>> Session.configure(bind=engine)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'engine' is not defined
>>> conn = some_engine.connect()
>>> session = Session(bind=conn)
>>> session
<sqlalchemy.orm.session.Session object at 0x10bd3d860>
>>> conn
<sqlalchemy.engine.base.Connection object at 0x10bd3dda0>
>>> session.query(User).all()
[1 calvin settachatgul calvin.settachatgul@gmail.com, 2 calv sett calvsett@gmail.com, 3 first1 last1 firstlast1@email.com, 4 first2 last2 firstlast2@email.com, 5 first3 last3 firstlast3@email.com, 6 first4 last4 firstlast4@email.com, 7 first5 last5 firstlast5@email.com]


