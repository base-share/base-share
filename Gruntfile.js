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
  grunt.loadTasks('tasks');

  // Project configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'src/*.js',
        'tasks/*.js'
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
    }
  });

  grunt.registerTask('default', ['jshint', 'service-url', 'service-doc', 'uglify']);

};
