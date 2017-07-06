let db = require(__dirname + '/../models/peopleModel');

exports.index = (req, res) => {
  return res.render('index');
}

exports.getPeopleData = (req, res) => {
  db.loadDatabase((err) => {
    if (err) return res.status(500).send({error: 'Error loading database'});

    db.find({}, (err, docs) => {
      if (err) return res.status(500).send({error: 'Error finding people records'});

      return res.status(200).send(docs);
    });
  });
}