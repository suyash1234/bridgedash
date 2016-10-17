angular.module("myApp").controller("empContractCtrl", function($scope,$http) {
  $http.get('app.json')
      .then(function(res) {
          $scope.table = res.data;
      })
});
