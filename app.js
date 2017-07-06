// var x = [1,2,3];

let express = require('express');

let fs = require('fs');
let handlebars = require('handlebars');
let app = module.exports = express();

// Disable autoload in case if db.json changes



app.use('/static', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

require(__dirname + '/server/router/peopleRouter');

// app.get('/', (req, res)=> {
//   res.render('index');
// });
//
// app.get('/people', function (req, res) {
//   db.loadDatabase((err) => {
//     if (err) return res.status(500).send({error: 'Error loading database'});
//
//     db.find({}, (err, docs) => {
//       if (err) return res.status(500).send({error: 'Error finding people records'});
//
//       return res.status(200).send();
//     });
//   });
// });
//
// app.get('/male', function (req, res) {
//   fs.readFile('everyone.hbs', 'utf8', (err, data) => {
//     var template = handlebars.compile(data);
//     db.find({
//       gender: 'male'
//     }, {}, (err, docs) => {
//       var rendered = template({
//         people: docs
//       });
//       res.contentType('text/html');
//       res.status(200).send(rendered);
//     });
//   });
// });
//
// app.get('/female', function (req, res) {
//   fs.readFile('everyone.hbs', 'utf8', (err, data) => {
//     var template = handlebars.compile(data);
//     db.find({
//       gender: 'female'
//     }, {}, (err, docs) => {
//       var rendered = template({
//         people: docs
//       });
//       res.contentType('text/html');
//       res.status(200).send(rendered);
//     });
//   });
// });
//
// app.get('/under30', function (req, res) {
//   fs.readFile('everyone.hbs', 'utf8', (err, data) => {
//     var template = handlebars.compile(data);
//     db.find({
//       age: {
//         $lt: 30
//       }
//     }, {}, (err, docs) => {
//       var rendered = template({
//         people: docs
//       });
//       res.contentType('text/html');
//       res.status(200).send(rendered);
//     });
//   });
// });
//
// app.get('/over30', function (req, res) {
//   fs.readFile('everyone.hbs', 'utf8', (err, data) => {
//     var template = handlebars.compile(data);
//     db.find({
//       age: {
//         $gte: 30
//       }
//     }, {}, (err, docs) => {
//       var rendered = template({
//         people: docs
//       });
//       res.contentType('text/html');
//       res.status(200).send(rendered);
//     });
//   });
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});