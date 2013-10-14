module.exports = function(grunt) {

  // Libs
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-markdown');


  // Temp dir
  var TempDir = require('temporary/lib/dir');
  var tempDir = new TempDir().path;


  // Project configuration.
  grunt.initConfig(
  {
    clean: {
      build: {
        src: ['build', 'dist']
      }
    },
    markdown: {
      build: {
        files: [
          {
            expand: true,
            src: '**/*.md',
            dest: 'build/',
            cwd: 'src/content/',
            ext: '.html'
          }
        ],
        options: {
          template: 'src/template/site.html',
          markdownOptions: {
            gfm: true
          }
        }
      }
    },
    less: {
      build: {
        files: {
          'build/css/site.css' : 'src/template/css/site.less'
        }
      }
    },
    watch: {
      main: {
          files: ['*.*', 'src/**/*.*'],
          tasks: 'build'
      }
    },
    release: {
      options: {
        npm: false
      }
    }
  });



  // Tasks
  grunt.registerTask('build', [
        'clean',
        'markdown',
        'less'
  ]);

  grunt.registerTask('deploy', [
        'build',
        'release'
  ]);

  grunt.registerTask('default', [
        'build'
  ]);


};