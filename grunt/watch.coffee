module.exports =
  options:
    reload: true
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

  # jshint:
  #   files: ['assets/js/src/**/*.js']
  #   tasks: ['jshint']
