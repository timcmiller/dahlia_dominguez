module.exports = function(app) {
  app.directive('socialDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: 'templates/social_template.html',
      scope: {
        style: '@',
        linkedin: '@',
        instagram: '@',
        facebook: '@',
        email: '@'
      }
    };
  });
};
