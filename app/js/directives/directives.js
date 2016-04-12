module.exports = function(app) {
  require('./social_directive/social_directive.js')(app);
  require('./site_nav_directive/site_nav_directive.js')(app);
};
