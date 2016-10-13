angular.module("myApp").controller("dashCtrl", function( $scope, $location,MyService,$http) {
    //make a function logout.This function will work when we submit on logout buttton
    $scope.table=[];
    $scope.logout= function() {
      $location.path("/login");
    }
    $scope.useremail=MyService.getName();
    $http.get('app.json')
    .then(function(res){
      $scope.table=res.data;
    })
    $http.get('apps.json')
    .then(function(res){
      $scope.tables=res.data;
      console.log($scope.tables);
    })
  });
