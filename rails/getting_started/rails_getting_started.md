## check the version of ruby and rails

>ruby -v

>rails -v

## check version of sqlite3

 >sqlite3 --version

## install Rails

>gem install rails

## create a blog app

>rails new blog

  * creates a rails app in the blog directory
  * installs dependencies with bundler

you can view the options of rails new with

  * > rails new -h

## start your rails server

  you can start your rails server with

  * >bin/rails server

  you will see a default webpage that ships with a newly generated Rails application

## create a controller and a view

  * create a new controller with the run "controller" generator

  * specify you want a controller called "welcome" with an action called "index"

  * >bin/rails generate controller [controller_name] [action_name]

  * >bin/rails generate controller welcome index

