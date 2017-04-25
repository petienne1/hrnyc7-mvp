angular.module('PlayerStatBook.search', [])

.controller('HomeController', function(DataFactory, $location, $scope, InsertFactory){
  //write a function that calls the func getPlayer
  $scope.searchPlayer = function(player) {
  	DataFactory.getPlayer(player)
  	  .then(function(response) {
  	  	$scope.currentPlayer = response;
  	  	InsertFactory.addToInsert($scope.currentPlayer);
        $location.path('/player');
  	  })
  }
})
