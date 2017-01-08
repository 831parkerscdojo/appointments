//////////////////////////////////////////////////////////
//                       app.js                         //
//////////////////////////////////////////////////////////

//add ngRoute/ngStorage/ngCookies etc...
var myApp = angular.module('myApp', ['ngRoute', 'ngStorage']);


    myApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'partials/login.html'
    })
    .when('/login', {
        templateUrl: 'partials/login.html'
        })
    .when('/home', {
        templateUrl: 'partials/dashboard.html'
        })
    .when('/show/:id', {
        templateUrl: 'partials/showpoll.html',
        controller: 'pollsController as PC'
    })
    .when('/addpoll', {
        templateUrl: '/partials/addpoll.html'
    })

    .when('/logout', {
        redirectTo: '/login'
    })
    .otherwise({
        redirectTo: '/login'
    })
})