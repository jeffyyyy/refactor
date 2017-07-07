const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const config = require('./config');
const env = app.settings.env;

const accessLogStream = rfs(config[env].logs.filename, {
  interval: config[env].logs.rotate,
  path: config[env].logs.logDirectory
});

fs.existsSync(config[env].logs.logDirectory) || fs.mkdirSync(config[env].logs.logDirectory);

app.use(morgan('combined', {stream: accessLogStream})); //save logs into file, rotate daily
app.use(bodyParser.json()) // for parsing application/json
app.use('/static', express.static(__dirname + '/public')); //public folder to serve css, js files
app.set('views', __dirname + '/views'); //default entry view path
app.set('view engine', 'hbs'); //view engine

require(__dirname + '/server/router/peopleRouter');

app.listen(config[env].port, function () {
  console.log(`app is on ${env} mode and listening to port ${config[env].port}!`)
});