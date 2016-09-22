myApp.controller('homeController', ['$rootScope', '$scope', 'authService', 'authManager', function ($rootScope, $scope, authService, authManager) {

  // Set the user profile when the page is refreshed
      $scope.profile = authService.userProfile;

      // Listen for the user profile being set when the user
      // logs in and update it in the view
      $scope.$on('userProfileSet', function(event, userProfile) {
        $scope.profile = userProfile;
      });

}]);
