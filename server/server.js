var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

// app.use(express.static('/'));

app.get('/nbateams', function(request, response) {
	var nbaTeams = [{teamName: 'Hawks',
		city: 'Atlanta'}, {teamName: 'Celtics', city: 'Boston'}, {teamName: 'Nets', city: 'Brooklyn'}, {teamName: 'Hornets', city: 'Charlotte'}, {teamName: 'Bulls', city: 'Chicago'}, {teamName: 'Cavaliers', city: 'Cleveland'}, {teamName: 'Mavericks', city: 'Dallas'}, {teamName: 'Nuggets', city: 'Denver'}, {teamName: 'Pistons', city: 'Detroit'}, {teamName: 'Warriors', city: 'Golden State'}, {teamName: 'Rockets', city: 'Houston'}, {teamName: 'Pacers', city: 'Indiana'}, {teamName: 'Clippers', city: 'Los Angeles'}, {teamName: 'Lakers', city: 'Los Angeles'}, {teamName: 'Grizzlies', city: 'Memphis'}, {teamName: 'Heat', city: 'Miami'}, {teamName: 'Bucks', city: 'Milwaukee'}, {teamName: 'Timberwolves', city: 'Minnesota'}, {teamName: 'Pelicans', city: 'New Orleans'}, {teamName: 'Knicks', city: 'New York'}, {teamName: 'Thunder', city: 'Oklahoma City'}, {teamName: 'Magic', city: 'Orlando'}, {teamName: 'Philadelphia', city: '76ers'}, {teamName: 'Suns', city: 'Phoenix'}, {teamName: 'Trail Blazers', city: 'Portland'}, {teamName: 'Kings', city: 'Sacramento'}, {teamName: 'Spurs', city: 'San Antonio'}, {teamName: 'Raptors', city: 'Toronto'}, {teamName: 'Jazz', city: 'Utah'}];

	response.end(JSON.stringify({data: nbaTeams}));
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