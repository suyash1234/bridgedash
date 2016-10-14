angular.module('myApp')
    .controller("loginCtrl", function($scope, $location, MyService, authService,$localStorage) {
            // $scope.login=function(){
            //   if($scope.email==="abc@gmail.com" && $scope.password==="1234"){
            //     $location.path("/dashboard");
            //   }
            //   else{
            //     $scope.error="user not found !";
            //   }
            // }
            $scope.login = function() {

                var str = $scope.data.email;
                var res = str.split('@');
                console.log(res[0]);
                MyService.setName(res[0]);

                authService.auth($scope.data).then(function(data){
                  var obj={"email":data.email,"date":new Date()};
                  var enc = MyService.myEncrypt(obj);
                  $localStorage.LoginData=enc;
                  $location.path("/dashboard");
                },
              function(error){
                console.log("error::"+error);
              })


            };



        // firebase.auth().signInWithEmailAndPassword($scope.email,$scope.password)
    });
