module.exports = function(app) {
  app.directive('sitenavDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '../partials/sitenav_template.html',
      scope: {
        name: '@'
      }
    };
  });
};
