angular.module('myApp')
.controller("loginCtrl",function($scope,$location,MyService,$auth){
// $scope.login=function(){
//   if($scope.email==="abc@gmail.com" && $scope.password==="1234"){
//     $location.path("/dashboard");
//   }
//   else{
//     $scope.error="user not found !";
//   }
// }
$scope.login=function(){
  $auth
   .login({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $state.go('dashboard');
        var str = $scope.email;
        var res = str.split('@');
        console.log(res[0]);

        MyService.setName(res[0]);

      })
     .catch(function (response) {
        console.log("error response", response);
        $scope.error="user not found !"+response;

      })
  };
})
