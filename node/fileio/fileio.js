var fs = require('fs');


// read the contents of a file
var readMe = fs.readFileSync('readme.txt', 'utf8');

// console.log(readMe);

// write to a file
fs.writeFileSync('writeMe.txt', readMe);

// deletes a file
fs.unlink( 'writeMe.txt');

