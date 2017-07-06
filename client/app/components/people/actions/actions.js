import * as consts from '../constants/constants';

export function requestPeopleListData(p = {}) {
  const cloneObj = Object.assign({}, p);

  return dispatch => {
    return fetch('/api/v1/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cloneObj)
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.json().then(err => {throw err;});
        }
      })
      .then((result) => {
        if (result) {
          dispatch(receivePeopleListData(p, result));
        }
      })
      .catch((result) => {
        dispatch(receivePeopleListDataError(p, result.error));
      })
  };
}

/*
 * When api call succeed
 */
export function receivePeopleListData(request, response) {
  return {
    type: consts.RECEIVE_PEOPLE_LIST_DATA,
    request,
    response
  };
}

/*
 * Error action
 */
export function receivePeopleListDataError(request, response) {
  return {
    type: consts.IS_ERROR,
    request,
    response
  };
}
