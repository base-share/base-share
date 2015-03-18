var ejs = require('ejs');

module.exports = function(grunt) {

  grunt.registerTask('service-tmpl', function() {
    var options = this.options();

    var escapeSpecial = function(str) {
      return str.replace(/[*+?\[\]()\\^$.]/g, '\\' + '$&');
    };

    var serializeParam = function(service) {
      var params = service.params;
      var paramMap = service.paramMap;

      var res = [];

      for (var p in params) {
        if (params.hasOwnProperty(p)) {
          if (typeof params[p] === 'object') {
            if (params[p].required) {
              if (params[p].default) {
                res.push(p + '=' + params[p].default);
              } else {
                res.push(p);
              }
            }
          } else {
            res.push(p + '={' + (paramMap[p] ? paramMap[p] : p).toLowerCase() + '}');
          }
        }
      }

      return res.join('&');
    };

    var serviceObj = grunt.file.readJSON('service/services.json');
    var services = serviceObj.services;

    var service;
    var data = [];

    for (var i = 0, len = services.length; i < len; i++) {
      service = services[i];
      if (!options.services || options.services.indexOf(service.id) > -1) {
        data.push({
          id: service.id,
          apiTmpl: service.api + '?' + serializeParam(service),
          isPopup: options.isPopup,
          popup: service.popup
        });
      }
    }

    var serviceTmpl = ejs.render(grunt.file.read('service/service-tmpl.ejs'), data);

    var prefix = '/*service-url-start*/';
    var suffix = '/*service-url-end*/';
    var re = new RegExp(escapeSpecial(prefix) + '[\\s\\S]*?\\n\\s*' + escapeSpecial(suffix));

    var baseShareJS = grunt.file.read('src/base-share.js');

    baseShareJS = baseShareJS.replace(re, prefix + serviceTmpl + '\n    ' + suffix);
    grunt.file.write('src/base-share.js', baseShareJS);


 });
};
