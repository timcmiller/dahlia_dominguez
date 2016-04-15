module.exports = function(app) {
  app.directive('mobileHeaderDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '../partials/mobile_header_template.html',
    };
  });
};
