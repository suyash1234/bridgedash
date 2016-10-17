angular.module("myApp").controller("empPersonalCtrl", function($scope,$http) {
  $http.get('app.json')
      .then(function(res) {
          $scope.table = res.data;
      })
});
