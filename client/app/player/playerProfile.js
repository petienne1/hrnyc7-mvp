angular.module('PlayerStatBook.player', [])

.controller('PlayerController', function(DataFactory, $location, $scope, InsertFactory){
	$scope.currentPlayer = InsertFactory.playerInfo;
	  $scope.searchPlayer = function(player) {
  	DataFactory.getPlayer(player)
  	  .then(function(response) {
  	  	$scope.currentPlayer = response;
  	  	InsertFactory.addToInsert($scope.currentPlayer);
        $location.path('/player');
  	  })
  }
});