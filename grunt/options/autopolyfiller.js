module.exports = {
  dev: {
    options: {
      broswers: ['last 10 version', 'ie 8', 'ie 9']
    },
    files: {
      '<%= config.app %>/scripts/polyfills.js': ['<%= config.src %>/javascript/**/*.js']
    }
  }
};
