import * as actiontypes from '../actions/actionTypes';

const INITIAL_STATE = {
  socket: null,
  socketId: null,
  creating: false,
  error: false
};

export default function socketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actiontypes.CREATE_SOCKET:
      return { ...state, creating: true, error: true };
    case actiontypes.CREATE_SOCKET_SUCCESS:
      return {
        ...state,
        creating: false,
        socket: action.payload,
        error: false
      };
    case actiontypes.CREATE_SOCKET_FAILED:
      return { ...state, creating: false, error: true };
    default:
      return state;
  }
}
