module.exports = (grunt) ->

  # runs grunt.initConfig and loads task-specific config from grunt/
  require('load-grunt-config') grunt, data: pkg: grunt.file.readJSON 'package.json'

  grunt.registerTask 'default', [
    # set up everything for development
    'sass'
    'jade'
    # then start tasks for server and watch
    'concurrent:dist'
  ]