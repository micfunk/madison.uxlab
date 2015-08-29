module.exports =
  connect:
    options:
      port: 9000,
      hostname: 'localhost'
      keepalive: true
      base: 'www'

    # dist:
    #   options:
    #     base: '<%= yeoman.dist %>'
    # coverage:
    #   options:
    #     port: 9002,
    #     open: true,
    #     base: ['coverage']