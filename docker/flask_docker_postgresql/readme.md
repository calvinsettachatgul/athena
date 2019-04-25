# Dockerized Flask and Postgresql 

using docker compose

# connect to docker container
docker exec -it <mycontainer> bash

# additional commands to install jython and curl
RUN apt-get install curl -y
RUN apt-get install jython

# view the os release
cat /etc/*release

# commands to run
# upgrade pip
pip install --upgrade pip

# container gets stuck get a warning wait until it starts
https://github.com/moby/moby/issues/10589

# build images 
docker-compose build 

# start containers
 docker-compose up 

