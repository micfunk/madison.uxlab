module.exports =
  css:
    files: ['**/*.scss']
    tasks: [
      # rebuild javascript
      'sass'
    ]
  jade:
    files: ['**/*.jade']
    tasks: [
      'jade'
    ]

  # jshint:
  #   files: ['assets/js/src/**/*.js']
  #   tasks: ['jshint']
