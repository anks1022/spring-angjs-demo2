'use strict'

var module = angular.module('demo.controllers', []);

module.controller("UserController", [ "$scope", "$rootScope","$window","$location", "UserService","$http", "CONSTANTS", function($scope,$rootScope,$window,$location, UserService, $http, CONSTANTS) {

    $rootScope.addnewuser = false;
    $rootScope.addNew = true;
    $scope.model = {date: defaultDate()};
    $rootScope.addedUsers = [{}];
    getExistingUsers();

    function sortUsers(u) {
        return u.sort();
    }
    function defaultDate() {
        var dfDt = new Date();
        return dfDt.getDate() + "-" + (dfDt.getMonth()+1) + "-" + dfDt.getFullYear();
    }

    function reset() {
        $scope.model = {};
        $scope.model = {date: defaultDate()};
    }

    $scope.clickAddUserButton = function() {
        $rootScope.addnewuser = true;
    }


    function getExistingUsers() {
    //alert($location.path())
    if($location.path() == "/add") {$rootScope.addNew = false;}
         reset();
		 $http.get(CONSTANTS.getAllUsers).then(function(r) {
		        if (!r.data.error) {
                     $scope.allUsers= r.data;
                     $rootScope.addedUsers = r.data;
                } else {
                     console.log("Error while getting users");
                }
		 });
    }

    $scope.saveNewUser = function() {
        UserService.saveUser($scope.model).then(function(r) {
                if (!r.data.error) {
                     $scope.isSuccess = r.data;
                     getExistingUsers();
                     $rootScope.addNew = true;
                     $window.location = '#/';
                } else {
                     console.log("Error while saving user");
                     }
        });
    }

} ]);