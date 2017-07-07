const path = require('path');
const Datastore = require('nedb');

const data = path.join(path.resolve('./'), 'data');
const db = new Datastore({
  filename: path.join(data, 'people.db'),
  autoload: true
});

module.exports = db;
