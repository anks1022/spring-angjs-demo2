describe('The application controller', function() {
    var $scope, $rootScope, $window;

    var USERS = [{firstName: 'ram1', lastName: 'zam1' , email: 'a1@b.com', date: '12-12-2017'},
                {firstName: 'ram2', lastName: 'zam2' , email: 'a2@b.com', date: '12-12-2017', url:'http://mypix.pic.gif'}
               ];

    /*beforeEach(angular.mock.http.init);
    afterEach(angular.mock.http.reset);*/

    beforeEach(angular.mock.module('demo'));


    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $controller = _$controller_;
        $scope = {};
        $rootScope = {};
        $window ={};
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('/user/getAllUsers').respond(USERS);

        $httpBackend.whenPOST('/user/saveUser', {firstName: 'ram', lastName: 'zam'
            , email: 'a@b.com', date: '12-12-2017'}).respond("000");

        $httpBackend.whenPOST('/user/saveUser', {firstName: 'ram', lastName: 'zam'
            , email: 'a@b.com'}).respond("001");

    }));

    it('returns the users list on app load', function () {
        var moviesController = $controller('UserController', { $scope: $scope });
        $httpBackend.flush();
        expect($scope.allUsers).toEqual(USERS);
    });

    it('puts the response data in root scope for home page display', function () {
        var userCtrl = $controller('UserController', { $scope: $scope, $rootScope: $rootScope });
        $httpBackend.flush();
        expect($rootScope.addedUsers).toEqual(USERS);
    });

    it('successfully saves user ', function () {
        var userCtrl = $controller('UserController', { $scope: $scope });
        $scope.model = {firstName: 'ram', lastName: 'zam'
            , email: 'a@b.com', date: '12-12-2017'};
        $scope.saveNewUser();
        $httpBackend.flush();
        expect($scope.isSuccess).toEqual("000");
    });

    it('navigates back to home page after successfully saving user ', function () {
        var userCtrl = $controller('UserController', {$scope: $scope,$rootScope : $rootScope, $window : $window});
        $scope.model = {firstName: 'ram', lastName: 'zam'
            , email: 'a@b.com', date: '12-12-2017'};
        $scope.saveNewUser();
        $httpBackend.flush();
        expect($rootScope.addNew).toEqual(true);
        expect($window.location).toEqual('#/');
    });

    it('fails saving data because fo missing mandatory field', function () {
        var userCtrl = $controller('UserController', { $scope: $scope });
        $scope.model = {firstName: 'ram', lastName: 'zam'
            , email: 'a@b.com'};
        $scope.saveNewUser();
        $httpBackend.flush();
        expect($scope.isSuccess).toEqual("001");
    });

    it('should sort names alphabatically ', function() {
        var users = ['jack', 'igor', 'jeff'];
        var sorted = users.sort();
        expect(sorted).toEqual(['igor', 'jack', 'jeff']);
    });

});