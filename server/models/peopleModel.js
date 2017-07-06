let Datastore = require('nedb');

let db = module.exports = new Datastore({
  filename: 'db.json'
  // autoload: true
});