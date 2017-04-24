var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});



// var http = require('http');

// function handleRequest(request, response) {
// 	console.log("A user made a request" + request.url);
// 	response.writeHead(200, {"Context-Type": "text/plain"});
// 	response.write("Hello World!");
// 	response.end();
// }

// http.createServer(handleRequest).listen(3000);
// console.log("Server is now running....");

// var port = 3000;

// var ip = '127.0.0.1';

// var server = http.createServer(handleRequest);
// console.log('Listening on http://' + ip + port);
// server.listen(port, ip);