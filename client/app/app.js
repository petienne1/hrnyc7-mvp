
angular.module('PlayerStatBook', [
	'PlayerStatBook.player',
	'PlayerStatBook.search',
	'ngRoute'
	])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
		    templateUrl: 'app/search/Search.html',
		    controller: 'HomeController'
			})
			.when('/player', {
				templateUrl:'app/player/playerProfile.html',
				controller: 'PlayerController'
			})
			.otherwise({
				templateUrl: 'app/search/Search.html',
		    controller: 'HomeController'
			});
	})

.factory('DataFactory', function($http) {
	return {
		getPlayer: function(player) {
			return $http({
				method: 'GET',
				url: '/player',
				params: {playerName: player}
			})
			.then(function(response) {
				return response.data.commonPlayerInfo[0];
			})
		}
	};
})

.factory('InsertFactory', function() {
	var insert = {};
	insert.addToInsert = function(value){
		insert.playerInfo = value;
	}
	return insert;
})

// Simple GET request example:
// $http({
//   method: 'GET',
//   url: '/someUrl'
// }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  // }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  // });