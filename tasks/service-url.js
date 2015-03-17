module.exports = function(grunt) {

  grunt.registerTask('service-url', function() {
    var options = this.options();

    var reSpecial = /[*+?\[\]()\\^$.]/g;
    function escapeSpecial(str) {
      return str.replace(reSpecial, '\\' + '$&');
    }

    function serializeParam(service) {
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
    }

    var serviceObj = grunt.file.readJSON('service/services.json');
    var services = serviceObj.services;

    var service;
    var serviceUrl = '\n';
    
    for (var i = 0, len = services.length; i < len; i++) {
      service = services[i];
      if (!options.services || options.services.indexOf(service.id) > -1) {
        serviceUrl += service.id + ': {\n  api: \'' +
                    service.api + '?' + serializeParam(service) +
                    '\'\n},\n';
      }
    }

    serviceUrl = serviceUrl.slice(0, -2).replace(/\n/g, '\n    ');

    var prefix = '/*service-url-start*/';
    var suffix = '/*service-url-end*/';
    var re = new RegExp(escapeSpecial(prefix) + '[\\s\\S]*?\\n\\s*' + escapeSpecial(suffix));

    var baseShareJS = grunt.file.read('src/base-share.js');

    baseShareJS = baseShareJS.replace(re, prefix + serviceUrl + '\n    ' + suffix);

    grunt.file.write('src/base-share.js', baseShareJS);

 });
};
