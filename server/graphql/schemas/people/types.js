// import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';
const graphql = require('graphql');
// import moment from 'moment';
// import _ from 'lodash';

const People = new graphql.GraphQLObjectType({
  name: 'people',
  description: 'An individual person information',
  fields: () => ({
    id: {
      type: graphql.GraphQLID,
      description: 'Unique ID for person. Assigned by DB',
      resolve(person) {
        return person._id; // eslint-disable-line no-underscore-dangle
      },
    },
    name: {
      type: graphql.GraphQLString,
      description: 'Name',
    },
    ageFilter: {
      type: graphql.GraphQLInt,
      description: 'Age Filter',
    },
    age: {
      type: graphql.GraphQLInt,
      description: 'Age',
    },
    gender: {
      type: graphql.GraphQLString,
      description: 'Gender',
    }
  }),
});

module.exports = People;
