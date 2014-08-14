var path = require('path');

module.exports = function(grunt) {

  // Libs
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-gh-pages');


  // Temp dir
  var TempDir = require('temporary/lib/dir');
  var tempDir = new TempDir().path;


  // Project configuration.
  grunt.initConfig(
  {
    clean: {
      build: {
        src: ['build', 'dist']
      },
      tidy: ["build/*.html"]
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'CNAME',
            dest: 'build/'
          }
        ]
      },
      rename: {
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: ['**/*.html'],
            dest: 'build/',
            rename: function(dest, src) {
              var filename = path.basename(src);
              var page = path.basename(src, '.html').toLowerCase();
              return dest + src.replace(filename, page + '/index.html');
            }
          }
        ]
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
          preCompile: preCompile,
          markdownOptions: {
            gfm: true,
            highlight: 'manual'
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
    imagemin: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'src/template/',
            src: '**/*.{png,jpg,gif}',
            dest: 'build/'
          }
        ]
      }
    },
    watch: {
      main: {
          files: ['*.*', 'src/**/*.*'],
          tasks: 'build'
      }
    },
  'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
  });



  // Tasks
  grunt.registerTask('build', [
        'clean:build',
        'copy:build',
        'markdown',
        'copy:rename',
        'clean:tidy',
        'less',
        'imagemin'
  ]);

  grunt.registerTask('deploy', [
        'build',
        'gh-pages'
  ]);

  grunt.registerTask('default', [
        'build'
  ]);




  function preCompile(src, context)
  {
    // Add page title
    if (context.src)
    {
      context.page = path.basename(context.src, '.md');

      grunt.log.debug('page: ' + context.page);
    }
    else
    {
      context.page = '';
    }


    grunt.log.debug('src: ' + src);
    grunt.log.debug('context: ' + JSON.stringify(context));    



    // Add template functions

    context.iff = function iff(condition, text, elseText)
    {
      if (!elseText)
      {
        elseText = '';
      }

      return condition ? text : elseText;
    };

    context.include = function include(filePath)
    {
      return grunt.file.read(filePath);
    };


    return src;
  }

};