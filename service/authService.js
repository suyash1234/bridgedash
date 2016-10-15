angular.module("myApp")
    .factory('authService', function($firebase, $location, $q) {
        var service = {};
        service.auth = function(data) {
            var deffered = $q.defer();
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(err) {
                    deffered.reject(err.message);
                })
                .then(function(data) {
                    deffered.resolve(data);
                })
            return deffered.promise;
        }
        return service;
    })
