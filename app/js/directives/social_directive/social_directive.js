module.exports = function(app) {
  app.directive('socialDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '../partials/social_template.html',
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
