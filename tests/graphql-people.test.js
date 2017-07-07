const graphql = require('graphql');
const peopleTypes = require('../server/graphql/schemas/people/types');
const chai = require('chai');
const expect = chai.expect;

describe('People Graphql Service', () => {
  it('should have field id and type of graphqlID', () => {
    expect(peopleTypes.People.getFields()).to.have.property('id');
    expect(peopleTypes.People.getFields().id.type).to.deep.equals(graphql.GraphQLID);
  });

  it('should have field name and type of graphqlString', () => {
    expect(peopleTypes.People.getFields()).to.have.property('name');
    expect(peopleTypes.People.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('should have field ageFilter and type of graphqlInt', () => {
    expect(peopleTypes.People.getFields()).to.have.property('ageFilter');
    expect(peopleTypes.People.getFields().ageFilter.type).to.deep.equals(graphql.GraphQLInt);
  });

  it('should have field age and type of graphqlInt', () => {
    expect(peopleTypes.People.getFields()).to.have.property('age');
    expect(peopleTypes.People.getFields().age.type).to.deep.equals(graphql.GraphQLInt);
  });

  it('should have field gender and type of graphqlString', () => {
    expect(peopleTypes.People.getFields()).to.have.property('gender');
    expect(peopleTypes.People.getFields().gender.type).to.deep.equals(graphql.GraphQLString);
  });

  it('should have field people and type of GraphQLList of people', () => {
    expect(peopleTypes.PeopleList.getFields().people.type).to.deep.equals(new graphql.GraphQLList(peopleTypes.People));
  });

  it('Given gender=male, age=20, should resolve a promise and return 1 specific result', () => {
    return peopleTypes.PeopleList.getFields().people.resolve(null, { gender: 'male', ageFilter: 0, age: 20 }).then((data) => {
      expect(data.length).to.deep.equals(1);
      expect(data[0]._id).to.equal('oqnu2ZnPTebp04bG');
    });
  });

  it('Given gender=both, age>30, should resolve a promise and return 1 specific result', () => {
    return peopleTypes.PeopleList.getFields().people.resolve(null, { gender: '', ageFilter: 1, age: 30 }).then((data) => {
      expect(data.length).to.deep.equals(1);
      expect(data[0]._id).to.equal('k3nEqkqlKmWZNejC');
    });
  });

  it('Given gender=female, age<25, should resolve a promise and return 1 specific result', () => {
    return peopleTypes.PeopleList.getFields().people.resolve(null, { gender: 'female', ageFilter: -1, age: 25 }).then((data) => {
      expect(data.length).to.deep.equals(1);
      expect(data[0]._id).to.equal('tKmv8RC6GlUnYcV3');
    });
  });

});
