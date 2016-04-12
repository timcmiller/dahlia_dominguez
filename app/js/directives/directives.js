module.exports = function(app) {
  require('./social_directive/social_directive.js')(app);
  require('./sitenav_directive/sitenav_directive.js')(app);
  require('./header_directive/header_directive.js')(app);
};
