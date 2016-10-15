angular.module('myApp')
    .controller("loginCtrl", function($scope, $location, MyService, authService, $localStorage) {
        $scope.login = function() {


            authService.auth($scope.data).then(function(data) {
                    var obj = {
                        "email": data.email,
                        "date": new Date()
                    };
                    var enc = MyService.myEncrypt(obj);
                    $localStorage.LoginData = enc;
                    $location.path("/dashboard");
                },
                function(error) {
                    console.log("error::" + error);
                })


        };



        // firebase.auth().signInWithEmailAndPassword($scope.email,$scope.password)
    });
