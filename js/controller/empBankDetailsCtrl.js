angular.module("myApp").controller("empBankDetailsCtrl", function($scope,$http) {
  $http.get('apps.json')
      .then(function(res) {
          $scope.tables = res.data;
      })
});
