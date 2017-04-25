const express = require('express');
const app = express();
const NBA = require("nba");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// API
app.get('/player', function(request, response) {

	var player = request.query.playerName;
  // var player = request.body.player;
  var playerInfo = NBA.findPlayer(player);
  NBA.stats.playerInfo({ PlayerID: playerInfo.playerId })
    .then(function(results) {
    	response.send(results);
    });
});



app.listen(3000, function(){
	console.log('Listening on port 3000');
});





// app.get('/', function(request, response) {
// 	response.sendFile(__dirname + '/../client');
// });

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





// app.get('/nbateams', function(request, response) {
// 	var nbaTeams = [{teamName: 'Hawks',
// 		city: 'Atlanta', conference: 'Eastern Conference'}, {teamName: 'Celtics', city: 'Boston', conference: 'Eastern Conference'}, {teamName: 'Nets', city: 'Brooklyn', conference: 'Eastern Conference'}, {teamName: 'Hornets', city: 'Charlotte', conference: 'Eastern Conference'}, {teamName: 'Bulls', city: 'Chicago', conference: 'Eastern Conference'}, {teamName: 'Cavaliers', city: 'Cleveland', conference: 'Eastern Conference'}, {teamName: 'Mavericks', city: 'Dallas', conference: 'Western Conference'}, {teamName: 'Nuggets', city: 'Denver', conference: 'Western Conference'}, {teamName: 'Pistons', city: 'Detroit', conference: 'Eastern Conference'}, {teamName: 'Warriors', city: 'Golden State', conference: 'Western Conference'}, {teamName: 'Rockets', city: 'Houston', conference: 'Western Conference'}, {teamName: 'Pacers', city: 'Indiana', conference: 'Eastern Conference'}, {teamName: 'Clippers', city: 'Los Angeles', conference: 'Western Conference'}, {teamName: 'Lakers', city: 'Los Angeles', conference: 'Western Conference'}, {teamName: 'Grizzlies', city: 'Memphis', conference: 'Western Conference'}, {teamName: 'Heat', city: 'Miami', conference: 'Eastern Conference'}, {teamName: 'Bucks', city: 'Milwaukee', conference: 'Eastern Conference'}, {teamName: 'Timberwolves', city: 'Minnesota', conference: 'Western Conference'}, {teamName: 'Pelicans', city: 'New Orleans', conference: 'Western Conference'}, {teamName: 'Knicks', city: 'New York', conference: 'Eastern Conference'}, {teamName: 'Thunder', city: 'Oklahoma City', conference: 'Western Conference'}, {teamName: 'Magic', city: 'Orlando'}, {teamName: 'Philadelphia', city: '76ers', conference: 'Eastern Conference'}, {teamName: 'Suns', city: 'Phoenix', conference: 'Eastern Conference'}, {teamName: 'Trail Blazers', city: 'Portland', conference: 'Western Conference'}, {teamName: 'Kings', city: 'Sacramento', conference: 'Western Eastern'}, {teamName: 'Spurs', city: 'San Antonio', conference: 'Western Conference'}, {teamName: 'Raptors', city: 'Toronto', conference: 'Eastern Conference'}, {teamName: 'Jazz', city: 'Utah', conference: 'Western Conference'}];

// 	response.end(JSON.stringify({data: nbaTeams}));
// });