module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {
      livereloadPort: 35783
    }
  });

  grunt.loadNpmTasks('ui-guide');
};
