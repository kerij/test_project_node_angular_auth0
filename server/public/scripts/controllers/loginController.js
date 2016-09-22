myApp.controller('loginController', ['$scope', 'authService', function($scope, authService) {

  // Put the authService on $scope to access
        // the login method in the view
        $scope.authService = authService;

}]);
