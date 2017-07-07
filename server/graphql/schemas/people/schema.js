const graphql = require('graphql');
const peopleTypes = require('./types');

// GRAPHQL SCHEMA
const Schema = new graphql.GraphQLSchema({
  query: peopleTypes.PeopleList
});

module.exports = Schema;
