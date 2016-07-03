module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // grunt.registerTask('build', ['copy','less','imagemin','autoprefixer','csscomb', 'csso', 'concat', 'uglify']);

  grunt.initConfig({
    less: {
      style: {
        files: {
          'dist/css/style.css': ['src/less/style.less']
        }
      }
    },
    watch: {
      html_watch: {
        files: ['src/*.html'],
        tasks: ['copy'],
      },
      less_watch: {
        files: '**/*.less',
        tasks: ['less']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html'],
        dest: 'dist/',
      },
    },
    imagemin: {
      dataimg: {
        option: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          cwd: 'src/img/data_image',
          src: ['*.{png,jpg,gif,svg}'],
          dest: 'src/img/data_image'
        }]
      },
      img: {
        option: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['*.{png,jpg,gif,svg}'],
          dest: 'dist/img'
        }]
      }
    },
    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js',
      }
    },
  })
};
