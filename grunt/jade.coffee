module.exports =
  prod:
    options:
      data:
        debug: false
      pretty: true
    files:
      "www/index.html": ["tmpl/index.jade"]