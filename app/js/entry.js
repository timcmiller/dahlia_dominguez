require('angular/angular');
require('angular-route');
var angular = window.angular;

var portfolioApp = angular.module('PortfolioApp', ['ngRoute']);
require('./directives/directives.js')(portfolioApp);

portfolioApp.config(['$routeProvider', function($route) {

}]);
