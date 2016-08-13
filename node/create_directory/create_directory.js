var fs = require('fs');

fs.mkdirSync('stuff');
fs.mkdirSync('stuff1');

fs.rmdirSync('stuff');

fs.mkdir('stuff2', function(){
	fs.readFile('readMe.txt', 'utf8', function(err, data){
		
		fs.writeFile('./stuff2/writeMe.txt', data);
	});
});

