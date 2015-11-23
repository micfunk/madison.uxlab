module.exports =
  css:
    files: ['css/**/*.scss']
    tasks: [
      # rebuild javascript
      'sass:dist'
    ]
  jade:
    files: ['**/*.jade']
    tasks: [
      'jade'
    ]
  copy:
    files: ['**/*', '!www/']
    tasks: [
      'copy'
    ]
  js:
    files: ['**/*.js','!www/']
    tasks: [
      'concat'
    ]

  # jshint:
  #   files: ['assets/js/src/**/*.js']
  #   tasks: ['jshint']
