const graphql = require('graphql');
const PeopleService = require('../../../services/PeopleService');

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

const PeopleList = new graphql.GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    people: {
      type: new graphql.GraphQLList(People),
      description: 'A list of all people',
      args: {
        gender: {
          type: graphql.GraphQLString,
          defaultValue: ''
        },
        ageFilter: {
          type: graphql.GraphQLInt,
          defaultValue: 0
        },
        age: {
          type: graphql.GraphQLInt,
          defaultValue: 0
        }
      },
      resolve(source, { gender, ageFilter, age }) {
        const queryParameters = {};
        if (gender) queryParameters.gender = gender;
        if (age >= 0) {
          queryParameters.age = {};
          switch (ageFilter) {
            case 1:
              queryParameters.age.$gt = age;
              break;
            case -1:
              queryParameters.age.$lt = age;
              break;
            case 0:
            default:
              queryParameters.age = age;
              break;
          }
        }

        return PeopleService.find(queryParameters).then(response => response);
      }
    },
  },
});

module.exports = {
  People,
  PeopleList
};
