/**
 * FileName:app.js
 * CreatedBy: Suyash
 * purpose : perform routing according to state
 */

/*create a module myApp and inject the services*/
var app = angular.module('myApp', ['ui.router', 'firebase', 'ngMessages', 'ngStorage', 'base64']);

/*use config to configure different states and pass services in config function*/
app.config(function($stateProvider, $urlRouterProvider) {
    /*Code for skip Login Page*/

    var skipIfLoggedIn = function($q, MyService, $location) {
        var deffered = $q.defer();
        if (MyService.isAuth()) {
            $location.path("/dashboard");
        } else {
            deffered.resolve();
        }
        return deffered.promise;
    }

    var loginRequired = function($q, MyService, $location) {
        var deffered = $q.defer();
        if (!MyService.isAuth()) {
            $location.path("/login");
        } else {
            deffered.resolve();
        }
        return deffered.promise;
    }

    /* initially app goes to the login page*/
    $urlRouterProvider.otherwise('/login');

    /* $stateProvider give different states*/
    $stateProvider

    /* configure the login state*/
        .state('login', {
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginCtrl',
        resolve: {
            skipIfLoggedIn: skipIfLoggedIn
        }
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'template/dashboard.html',
        controller: 'dashCtrl',
        resolve: {
            loginRequired: loginRequired
        }
    })
});
