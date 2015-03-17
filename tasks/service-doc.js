var ejs = require('ejs');

module.exports = function(grunt) {

  grunt.registerTask('service-doc', function() {
    var serviceObj = grunt.file.readJSON('service/services.json');
    var docTpl = grunt.file.read('service/service-doc.ejs');

    var docStr = ejs.render(docTpl, serviceObj);
    var readmeFile = grunt.file.read('README.md');

    var prefix = '{{service-doc-start}}';
    var suffix = '{{service-doc-end}}';
    var re = new RegExp(prefix + '[\\s\\S]*?' + suffix);

    readmeFile = readmeFile.replace(re, prefix + '\n' + docStr + '\n' + suffix);

    grunt.file.write('README.md', readmeFile);
  });
};
