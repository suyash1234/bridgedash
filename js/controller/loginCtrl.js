/**
 * FileName:loginctrl.js
 * CreatedBy: suyash,hamid
 * purpose : get data from firebase and encode it
 */
angular.module('myApp')
    .controller("loginCtrl", function($scope, $location, MyService, authService, $localStorage) {

        /* this function called on clicking from buttton
         * use authService to call the auth function and get all the firebase data from that function
         * use MyService to call the myEncrypt function which encode our json data
         * store the json data in localStorage
         */
        $scope.login = function() {
            authService.auth($scope.data).then(function(data) {
                    var obj = {
                        "email": data.email,
                        "date": new Date()
                    };
                    var enc = MyService.myEncrypt(obj);
                    $localStorage.LoginData = enc;
                    $location.path("/dashboard/empPersonal");
                },
                function(error) {
                    console.log("error::" + error);
                })
        };
    });
