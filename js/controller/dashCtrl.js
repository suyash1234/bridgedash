angular.module("myApp").controller("dashCtrl", function($scope, $location, MyService, $http, $localStorage) {
    //make a function logout.This function will work when we submit on logout buttton
    $scope.table = [];
    $scope.logout = function() {
        //delete $localStorage.LoginData;
        $localStorage.$reset();
        $location.path("/login");
    }

    var data = MyService.myDecrypt($localStorage.LoginData);
    var res = data.email.split('@');
    MyService.setName(res[0]);

    $scope.useremail = MyService.getName();
    $http.get('app.json')
        .then(function(res) {
            $scope.table = res.data;
        })
    $http.get('apps.json')
        .then(function(res) {
            $scope.tables = res.data;
            console.log($scope.tables);
        })
});
