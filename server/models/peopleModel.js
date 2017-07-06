/*
 * Database model with helper query method
 */

let _ = require('lodash');
let Datastore = require('nedb');
let db = new Datastore({
  filename: 'db.json'
});

module.exports = {

  //load database
  loadDatabase: (callback) => {
    db.loadDatabase((err) => {
      callback(err);
    });
  },

  //take input parameters and make database query
  queryPeopleRecords: (data) => {
    return new Promise((resolve, reject) => {
      let queryParameters = {};
      if (data && data.gender) queryParameters.gender = data.gender;
      if (data && _.isInteger(data.age)) {
        queryParameters.age = {};
        switch(data.ageFilter) {
          case 0:
            queryParameters.age = data.age;
            break;
          case 1:
            queryParameters.age['$gt'] = data.age;
            break;
          case -1:
            queryParameters.age['$lt'] = data.age;
            break;
          default:
            queryParameters.age = data.age;
            break;
        }
      }
      db.find(queryParameters, (err, docs) => {
        if (err) reject(err.message);
        resolve(docs);
      })
    });
  }
}