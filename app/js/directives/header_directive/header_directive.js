module.exports = function(app) {
  app.directive('headerDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '../partials/header_template.html',
    };
  });
};
