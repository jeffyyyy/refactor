const peopleController = require('../controllers/peopleController');
const app = require('../../app');

app.get('/', peopleController.index);
app.post('/api/v1/people', peopleController.getPeopleData);
