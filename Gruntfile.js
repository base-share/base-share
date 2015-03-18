/**
 * base-share
 * https://github.com/base-share/base-share
 *
 * Under the MIT license | (c) Alex Chao
 */

'use strict';

module.exports = function(grunt) {

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Load custom tasks
  grunt.loadTasks('build/tasks');

  // Project configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'src/*.js',
        'build/tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '**/*.js',
            dest: 'dist'
          }
        ]
      }
    },
    'service-tmpl': {
      options: {
        isPopup: true
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'service-tmpl', 'service-doc', 'uglify']);

};
