var ejs = require('ejs');

module.exports = function(grunt) {

  grunt.registerTask('service-doc', function() {
    var serviceObj = grunt.file.readJSON('service/services.json');
    var docTpl = grunt.file.read('service/service-doc.ejs');

    var docStr = ejs.render(docTpl, serviceObj);
    console.log(docStr);
  });
};
