let peopleController = require(__dirname + '/../controllers/peopleController');
let app = require(__dirname + '/../../app');

app.get('/', peopleController.index);
app.get('/api/v1/people', peopleController.getPeopleData);