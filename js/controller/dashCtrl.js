angular.module("myApp").controller("dashCtrl", function( $scope, $location,MyService) {
    //make a function logout.This function will work when we submit on logout buttton
    $scope.logout= function() {
      $location.path("/login");
    }
    $scope.useremail=MyService.getName();
  });
