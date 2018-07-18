'use strict'

var demoApp = angular.module('demo', [  "ngRoute", 'demo.controllers','demo.services']);


    demoApp.config(function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
     $routeProvider
                    .when('/add' , {
                        templateUrl : "/views/addUser.html",
                        controller : 'UserController'
                    })
                    .otherwise({
                            redirectTo: '/'
                    });
               });

     demoApp.constant("CONSTANTS", {
     	getAllUsers : "/user/getAllUsers",
     	saveUser    : "/user/saveUser"
     });

     demoApp.directive("datepicker", function () {
         function link(scope, element, attrs, controller) {
             element.datepicker({
                 onSelect: function (val) {
                     scope.$apply(function () {
                         controller.$setViewValue(val);
                     });
                 },
                 dateFormat: "dd-mm-yy"
             });
         }
         return {
             require: 'ngModel',
             link: link
         };
     });
