var http = require ('http');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	// also respond with headers
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hey there');
});
server.listen(3000, 'localhost');
console.log('now listening to port 3000');
