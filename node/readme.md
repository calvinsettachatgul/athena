##  Node

###  Node is a server-side language that allowed javascript syntax to operate outside of the web browser as a client language.

  *  Node uses Google V8 JavaScript engine to execute code, and a large percentage of the basic modules are written in JavaScript.

###  Modules

  *  Modules are node packages which encapsulate functionality

  *  To use a core module in node you have to instantiate a module object so that you can use some of the modules functions

  *  Example Syntax

  *  var moduleObject = require('moduleName');

  *  Use case - instatiating a FileSystem module object

  *  >  var fs = require('fs');

  *  >  fs.readFile( path, callback);

###  fs.readdir(path, callback)

  *  from the node documentation

  *  fs.readdir(path, callback)#
Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
