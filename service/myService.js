angular.module("myApp")
    .service('MyService', function() {
      var data;
        return {
          setName: function(name) {
              data = name;
              console.log(data);
          },

          getName: function() {
            return data;
          },
        }
    });
