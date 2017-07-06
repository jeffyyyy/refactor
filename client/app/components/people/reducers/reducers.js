const initialState = {
  peopleList: [],
  error: ''
};

export default function PeopleReducer(state = initialState, action) {
  const cloneObj = Object.assign({}, state);

  switch (action.type) {
    case 'RECEIVE_PEOPLE_LIST_DATA':
      cloneObj.peopleList = action.response;
      cloneObj.error = '';
      break;

    case 'IS_ERROR':
      cloneObj.peopleList = [];
      cloneObj.error = action.response;
      break;
    default:
      break;
  }

  return cloneObj;
}
