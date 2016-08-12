var fs = require('fs');

var readMe = fs.readFile('readme.txt', 'utf8', function(err, data){
	fs.writeFile('writeMe.txt', data);
});

//console.log(readMe);

//fs.writeFileSync('writeMe.txt', readMe);



