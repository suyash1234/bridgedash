/**
 * FileName:app.js
 * CreatedBy: Suyash,Hamid
 * purpose : perform routing according to state
 */

/*create a module myApp and inject the services*/
var app = angular.module('myApp', ['ui.router', 'firebase', 'ngMessages', 'ngStorage', 'base64']);

/*use config to configure different states and pass services in config function*/
app.config(function($stateProvider, $urlRouterProvider) {
    /*Code for skip Login Page*/

    /*  this function skip the login page and show directly dashboard until user login
     * if user logout then goes to the login page
     * use the MyService service to call isAuth() function
     */
    var skipIfLoggedIn = function($q, MyService, $location) {
        var deffered = $q.defer();
        if (MyService.isAuth()) {
            $location.path("/dashboard/empPersonal");
        } else {
            deffered.resolve();
        }
        return deffered.promise;
    }

    /* this function works as if the user not login then first he must login then go the dashboard page*/
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
        /* call the skipIfLoggedIn function in the same page*/
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
        /* call the loginRequired function in the same page*/
        resolve: {
            loginRequired: loginRequired
        }
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard.empContract', {
        url: '/empContract',
        templateUrl: 'template/empContract.html',
        controller: 'empContractCtrl',
        resolve:{
          loginRequired:loginRequired
        }
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard.empBankDetails', {
        url: '/empBankDetails',
        templateUrl: 'template/empBankDetails.html',
         controller: 'empBankDetailsCtrl',
         resolve:{
           loginRequired:loginRequired
         }
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard.empProfile', {
        url: '/empProfile',
        templateUrl: 'template/empProfile.html',
         controller: 'empProfileCtrl',
         resolve:{
           loginRequired:loginRequired
         }
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard.empPersonal', {
        url: '/empPersonal',
         templateUrl: 'template/empPersonal.html',
         controller: 'empPersonalCtrl',
         resolve:{
           loginRequired:loginRequired
         }
    })
});
