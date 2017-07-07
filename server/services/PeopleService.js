const db = require('../db/datastore');

const people = {
  find(query) {
    return new Promise((resolve, reject) => {
      db.find(query)
        .exec((err, docs) => {
          if (err) reject(err);
          return resolve(docs);
        });
    });
  }

};

module.exports = people;
