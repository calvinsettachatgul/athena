##  MEAN stack

###  MEAN stack is composed of 3 different layers

#### M in MEAN refers to the database layer using MongoDB

#### E in MEAN refers to the router module called express that is a node module to create routes

#### A in MEAN refers to the view layer which is Angular.js a front end framework

#### N in MEAN refers to the backend language Node.js

##  Creating a simple myapp Hello World!

### Create a directory called myapp

>  mkdir myapp

>  cd myapp

###  Make the directory an npm managed directory

>  npm init

  *  this will create a package.json file which will hold information about the app you are creating and what npm modules that the application uses.

  *  npm will guide you through configuration of data for the app

###  Make express your routing engine install express in the app directory


>  npm install express --save

  *  the --save flag will save express as a module dependency in package.json

  *  to install express temporarily without saving run:

>  npm install express