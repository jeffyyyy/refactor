const graphql = require('graphql');
const PeopleType = require('./types');
const PeopleService = require('../../../services/PeopleService');

// GRAPHQL People Schema QUERY
const PeopleQuery = new graphql.GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    people: {
      type: new graphql.GraphQLList(PeopleType),
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
        if (age > 0) {
          queryParameters.age = {};
          switch (ageFilter) {
            case 0:
              queryParameters.age = age;
              break;
            case 1:
              queryParameters.age.$gt = age;
              break;
            case -1:
              queryParameters.age.$lt = age;
              break;
            default:
              queryParameters.age = age;
              break;
          }
        }

        return PeopleService.find(queryParameters).then(response => response);
      }
    },


    // singlePost: {
    //   type: PostType,
    //   description: 'A single blog post. Accepts argument for query. Returns one result',
    //   args: {
    //     col: {
    //       type: new GraphQLNonNull(columnEnum),
    //     },
    //     query: {
    //       type: new GraphQLNonNull(GraphQLString),
    //       description: 'Query for post by id or title',
    //     },
    //   },
    //   resolve(source, { col, query }) {
    //     const search = singlePostQuery(col, query);
    //     return PostsService.find(search).then((response) => {
    //       return response[0];
    //     });
    //   },
    // },
    // latestPost: {
    //   type: PostType,
    //   description: 'The latest blog post by updatedAt',
    //   resolve() {
    //     return PostsService.findLimit({}, 1).then((response) => {
    //       return response[0];
    //     });
    //   },
    // },
    // recentPosts: {
    //   type: new GraphQLList(PostType),
    //   description: 'A list of recent blog posts. Accepts argument for count to return',
    //   args: {
    //     count: {
    //       type: new GraphQLNonNull(GraphQLInt),
    //       description: 'Number of recent items',
    //     },
    //   },
    //   resolve(source, { count }) {
    //     return PostsService.findLimit({}, count).then((response) => {
    //       return response;
    //     });
    //   },
    // },
  },
});

// GRAPHQL SCHEMA
const Schema = new graphql.GraphQLSchema({
  query: PeopleQuery
});

module.exports = Schema;
