const path = require('path');

const config = {
  development: {
    port: 3000,
    logs: {
      filename: 'access.log',
      rotate: '1d',
      logDirectory: path.join(__dirname, 'log')
    }
  },
  production: {
    port: 3900,
    logs: {
      filename: 'refactor-access.log',
      rotate: '5d',
      logDirectory: path.join(__dirname, 'log')
    }
  },

};

module.exports = config;