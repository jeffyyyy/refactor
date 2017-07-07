const peopleModel = require('../models/peopleModel');

/*
 * Display index page
 */
exports.index = (req, res) => res.render('index');

/*
 * corresponding to api call api/v1/people to retrieve people data
 */
exports.getPeopleData = (req, res) => peopleModel.queryPeopleRecords(req.body).then(
  docs => res.status(200).send(docs),
  error => res.status(500).send({ error })
);
