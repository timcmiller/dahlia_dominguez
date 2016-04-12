module.exports = function(app) {
  app.directive('socialDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/site_nav_template.html',
      scope: {
        name: '@'
      }
    };
  });
};
