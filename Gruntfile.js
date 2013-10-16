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
      }
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
          preCompile: parseMetadata,
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
        'clean',
        'copy',
        'markdown',
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




  function parseMetadata(src, context)
  {
    // Add Metadata
    if (src.length !== 0 && src[0] === '{')
    {
      var end = src.indexOf('\n}');
      var metadata = src.substring(0, end+2);
      src = src.substring(end+2);

      grunt.log.debug('src: ' + src);
      grunt.log.debug('metadata: ' + metadata);

      context.metadata = JSON.parse(metadata);
    }
    else
      context.metadata = {};
    

    // Add template functions
    context.iff = function iff(condition, text, elseText)
    {
      if (!elseText)
        elseText = '';

      return condition ? text : elseText;
    };

    context.include = function include(filePath)
    {
      return grunt.file.read(filePath);
    };


    return src;
  }

};