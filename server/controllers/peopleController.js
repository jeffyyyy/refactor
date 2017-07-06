let peopleModel = require(__dirname + '/../models/peopleModel');

/*
 * Display index page
 */
exports.index = (req, res) => {
  return res.render('index');
}

/*
 * corresponding to api call api/v1/people to retrieve people data
 */
exports.getPeopleData = (req, res) => {
  peopleModel.loadDatabase((err) => {
    if (err) return res.status(500).send({error: 'Error loading database'});

    peopleModel.queryPeopleRecords(req.body).then((docs) => {
      return res.status(200).send(docs);
    }, (err) => {
      return res.status(500).send({error: err});
    });
  });
}