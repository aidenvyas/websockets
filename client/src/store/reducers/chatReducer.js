import * as actiontypes from '../actions/actionTypes';

const INITIAL_STATE = {
  username: '',
  names: []
};

export default function chatReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actiontypes.SET_USERNAME:
      return { ...state, username: action.payload };
    case actiontypes.ALLNAMES_TO_SERVER:
      return { ...state, names: action.payload };
    default:
      return state;
  }
}
