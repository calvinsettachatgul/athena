# https://docs.docker.com/engine/examples/postgresql_service/

PostgreSQL

CREATE TABLE cities (
  name varchar(80),
  location point
);

INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');
