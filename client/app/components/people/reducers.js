const initialState = {
  list: []
}

export default function PeopleReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIST_PEOPLE':
      return Object.assign({}, state, {list: []});
      break;
    default:
      return state;
      break;
  }
}