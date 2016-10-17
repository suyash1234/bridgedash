angular.module("myApp").controller("empProfileCtrl", function($scope,$http) {
  $http.get('apps.json')
      .then(function(res) {
          $scope.tables = res.data;
      })
});
