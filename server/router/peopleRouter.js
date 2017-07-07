const peopleController = require('../controllers/peopleController');
const app = require('../../app');
const graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schemas/people/schema');

// GraphQL entry
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

// Index page
app.get('/', peopleController.index);

// RESTFUL API
app.post('/api/v1/people', peopleController.getPeopleData);
