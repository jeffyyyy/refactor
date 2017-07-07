import * as consts from '../constants/constants';

const initialState = {
  peopleList: [],
  error: ''
};

export default function PeopleReducer(state = initialState, action) {
  const cloneObj = Object.assign({}, state);

  switch (action.type) {
    case consts.PEOPLE_LOAD_FULFILLED:
      cloneObj.peopleList = action.payload.data.people;
      cloneObj.error = action.payload.data.error;
      break;

    case consts.IS_ERROR:
      cloneObj.peopleList = [];
      cloneObj.error = action.response;
      break;
    default:
      break;
  }

  return cloneObj;
}
