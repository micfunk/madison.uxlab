module.exports =
  options:
    reload: true
  css:
    files: ['**/*.scss']
    tasks: [
      # rebuild javascript
      'libsass'
    ]
  jade:
    files: ['**/*.jade']
    tasks: [
      'jade'
    ]

  # jshint:
  #   files: ['assets/js/src/**/*.js']
  #   tasks: ['jshint']
