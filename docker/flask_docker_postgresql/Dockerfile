FROM python:3.6
LABEL maintainer "Calvin Settachatgul <calvin.settachatgul@gmail.com>"
RUN apt-get update
RUN apt-get -y install vim
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
ENV FLASK_ENV="docker"
EXPOSE 5000
