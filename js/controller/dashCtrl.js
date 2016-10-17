/**
 * FileName:dashCtrl.js
 * CreatedBy: Suyash
 * purpose : purpose is to decode the data and logout and load the json files
 */
angular.module("myApp").controller("dashCtrl", function($scope, $location, MyService, $http, $localStorage) {
    /* make a function logout.This function will work when we submit on logout buttton */
    $scope.table = [];
    $scope.logout = function() {
        /* delete $localStorage.LoginData;*/
        $localStorage.$reset();
        $location.path("/login");
    }

    /* use MyService to decode the data whatever we have in localStorage
        split the emailid before @ and use MyService to set and get the name */
    var data = MyService.myDecrypt($localStorage.LoginData);
    var res = data.email.split('@');
    MyService.setName(res[0]);

    /* get the emailid using MyService and store in $scope.useremail,
       this is used using binding expression in the html page*/
    $scope.useremail = MyService.getName();

});
