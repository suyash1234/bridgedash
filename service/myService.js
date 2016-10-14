angular.module("myApp")
    .service('MyService', function($base64,$localStorage) {
      var data;
        return {
          setName: function(name) {
              data = name;
          },

          getName: function() {
            return data;
          },
          myEncrypt:function(obj){
            return $base64.encode(JSON.stringify(obj));
          },
          myDecrypt:function(obj){
            return JSON.parse($base64.decode(obj));
          }
          // isAuth:function(){
          //   var data = $localStorage.LoginData;
          //   if(data!==undefined)
          //   {
          //     var data1 = myDecrypt(data);
          //     if(data1.email!==undefined)
          //     {
          //         return true
          //     }else
          //     {
          //         return false;
          //     }
          // }else{
          //   return false;
          // }
          //
          // }
        }
    });
