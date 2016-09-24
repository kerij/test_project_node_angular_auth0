var myApp = angular.module('myApp', ['ui.router', 'auth0.lock', 'angular-jwt']);

myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'lockProvider', 'jwtOptionsProvider', 'jwtInterceptorProvider', function($stateProvider, $urlRouterProvider, $httpProvider, lockProvider, jwtOptionsProvider, jwtInterceptorProvider) {

  // Initialization for the Lock widget
      lockProvider.init({
        clientID: 'L4o1zIFMplRTwTJv56j1LwnkjFOO6dwX',
        domain: 'kerij.auth0.com'
      });

      // Configuration for angular-jwt
      jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        },
        whiteListedDomains: ['localhost'],
        unauthenticatedRedirectPath: '/login'
      });

      // Add the jwtInterceptor to the array of HTTP interceptors
      // so that JWTs are attached as Authorization headers
      $httpProvider.interceptors.push('jwtInterceptor');



  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: "loginController"
    })
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'homeController'
    })
  




}]);
