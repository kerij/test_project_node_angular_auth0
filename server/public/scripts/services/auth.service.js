(function() {

  'use strict';

  angular
    .module('myApp')
    .service('authService', authService);

  authService.$inject = ['$rootScope', 'lock', 'authManager'];

  function authService($rootScope, lock, authManager) {

    var userProfile = JSON.parse(localStorage.getItem('profile')) || {};
    console.log('user profile: ', userProfile);

    function login() {
      console.log('login called');
      lock.show();
    }

    // Logging out just requires removing the user's
    // id_token and profile
    function logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      authManager.unauthenticate();
      userProfile = {};
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function(authResult) {
        console.log('auth here');
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();

        lock.getProfile(authResult.idToken, function(error, profile) {
          if (error) {
            console.log(error);
          }

          localStorage.setItem('profile', JSON.stringify(profile));
          $rootScope.$broadcast('userProfileSet', profile);
        });
      });
    }

    return {
      userProfile: userProfile,
      login: login,
      logout: logout,
      registerAuthenticationListener: registerAuthenticationListener,
    }
  }
})();
