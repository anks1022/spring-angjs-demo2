describe('The application controller', function() {
    var $scope;

    /*beforeEach(angular.mock.http.init);
    afterEach(angular.mock.http.reset);*/

    beforeEach(angular.mock.module('demo'));


    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $controller = _$controller_;
        $scope = {};
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('/user/getAllUsers').respond([{
            firstName: 'ram'
        }]);

        $httpBackend.whenPOST('/user/saveUser', {firstName: 'ram', lastName: 'ram'
            , email: 'a@b.com', date: '12-12-2017'}).respond("success");

        $httpBackend.whenPOST('/user/saveUser', {firstName: 'ram', lastName: 'ram'
            , email: 'a@b.com'}).respond("failure");

    }));

    it('should load default movies (with mock http request)', function () {
        var moviesController = $controller('UserController', { $scope: $scope });
        $httpBackend.flush();
        expect($scope.allUsers).toEqual([{firstName: 'ram'}]);
    });

    it('Save data success', function () {
        var userCtrl = $controller('UserController', { $scope: $scope });
        $scope.model = {firstName: 'ram', lastName: 'ram'
            , email: 'a@b.com', date: '12-12-2017'};
        $scope.saveNewUser();
        $httpBackend.flush();
        expect($scope.isSuccess).toEqual("success");
    });

    it('Save data failure- missing mandatory field', function () {
        var userCtrl = $controller('UserController', { $scope: $scope });
        $scope.model = {firstName: 'ram', lastName: 'ram'
            , email: 'a@b.com'};
        $scope.saveNewUser();
        $httpBackend.flush();
        expect($scope.isSuccess).toEqual("failure");
    });

    it('should sort names alphabatically ', function() {
        var users = ['jack', 'igor', 'jeff'];
        var sorted = users.sort();
        expect(sorted).toEqual(['igor', 'jack', 'jeff']);
    });



});