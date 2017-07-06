const express = require('express');
const bodyParser = require('body-parser')
const app = module.exports = express();
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream')
const logDirectory = path.join(__dirname, 'log');
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

app.use(morgan('combined', {stream: accessLogStream})); //save logs into file, rotate daily
app.use(bodyParser.json()) // for parsing application/json
app.use('/static', express.static(__dirname + '/public')); //public folder to serve css, js files
app.set('views', __dirname + '/views'); //default entry view path
app.set('view engine', 'hbs'); //view engine

require(__dirname + '/server/router/peopleRouter');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});