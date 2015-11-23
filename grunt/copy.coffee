module.exports =
  img:
    files: [
      expand: true
      src: ['img/*']
      dest: 'www/'
      filter: 'isFile'
    ]