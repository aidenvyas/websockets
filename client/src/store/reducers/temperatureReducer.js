import * as actiontypes from '../actions/actionTypes';
const INTITIAL_STATE = {
  temperature: null,
  isFetching: false,
  temperror: false
};

export default function temperatureReducer(state = INTITIAL_STATE, action) {
  switch (action.type) {
    case actiontypes.FETCHING_TEMPERATURE:
      return { ...state, isFetching: true };
    case actiontypes.FETCHING_TEMPERATURE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        temperror: false,
        temperature: action.payload
      };
    case actiontypes.FETCHING_TEMPERATURE_FAILED:
      return { ...state, isFetching: false, temperror: true };
    case actiontypes.DESTROY_SOCKET:
      return { ...state, temperror: true };
    default:
      return state;
  }
}
