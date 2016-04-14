require('angular/angular');
require('angular-route');
var angular = window.angular;

var portfolioApp = angular.module('PortfolioApp', ['ngRoute']);
require('./directives/directives.js')(portfolioApp);
require('./portfolio/portfolio.js')(portfolioApp);

portfolioApp.config(['$routeProvider', function($route) {
  $route.
    when('/', {
      templateUrl: 'templates/home.html'
    }).
    when('/about', {
      templateUrl: 'templates/about.html'
    }).
    when('/portfolio', {
      templateUrl: 'templates/portfolio.html'
    }).
    when('/resume', {
      templateUrl: 'templates/resume.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
