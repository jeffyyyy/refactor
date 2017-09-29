import { gql } from 'react-apollo';
import * as consts from '../constants/constants';
import client from '../../../client';

const defaultQueryParameters = {
  gender: '',
  ageFilter: 0,
  age: -1
};

export const PEOPLE_QUERY = gql`query (
    $gender: String,
    $ageFilter: Int,
    $age: Int
  ) {
    people(
      gender: $gender,
      ageFilter: $ageFilter,
      age: $age
    ) {
      id
      name
      age
      gender
    }
  }
`;

export function receivePeopleListDataError(request, response) {
  return {
    type: consts.IS_ERROR,
    request,
    response
  };
}

export function requestPeopleListData(query = defaultQueryParameters) {
  return (dispatch) => {
    dispatch({
      type: consts.PEOPLE_LOAD,
      payload: client.query({
        query: PEOPLE_QUERY,
        variables: query
      })
    })
      .catch(() => {
        dispatch(receivePeopleListDataError(query, 'Something went wrong'));
      });
  };
}

