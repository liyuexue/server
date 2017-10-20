/**
 * Created by Administrator on 2017/10/19.
 */


var app = angular.module('myApp',['ngRoute']);


app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/news',{
            templateUrl:"App/View/_news.html",
            controller:"newsController"
        })
        .otherwise({
            redirectTo:"/news"
        })
});