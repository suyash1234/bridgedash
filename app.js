/**
 * FileName:app.js
 * CreatedBy: Suyash
 * purpose : perform routing according to state
 */

/*create a module myApp and inject the services*/
var app = angular.module('myApp', ['ui.router', 'firebase','ngMessages','satellizer']);

/*use config to configure different states and pass services in config function*/
app.config(function($stateProvider, $urlRouterProvider) {


    /* initially app goes to the login page*/
    $urlRouterProvider.otherwise('/login');

    /* $stateProvider give different states*/
    $stateProvider

    /* configure the login state*/
        .state('login', {
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
    })
    $stateProvider

    /* configure the login state*/
        .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'template/dashboard.html',
        controller: 'dashCtrl'
    })
  });
