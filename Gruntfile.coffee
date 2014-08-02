module.exports = (grunt) ->

  # runs grunt.initConfig and loads task-specific config from grunt/
  require('load-grunt-config') grunt, data:
    pkg: grunt.file.readJSON 'package.json'