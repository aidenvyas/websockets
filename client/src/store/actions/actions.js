import * as actiontypes from './actionTypes';
import io from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';
const socket = io(ENDPOINT);
export function fetchTemperature() {
  return {
    type: actiontypes.FETCHING_TEMPERATURE
  };
}

export function getTemperature(dispatch) {
  try {
    socket.on('FromAPI', data => dispatch(fetchTemperatureSuccess(data)));
  } catch (error) {
    dispatch(fetchTemperatureFailed(error));
  }
}

export function fetchTemperatureSuccess(temperature) {
  console.log(temperature, 'in sucess');
  return {
    type: actiontypes.FETCHING_TEMPERATURE_SUCCESS,
    payload: temperature
  };
}

export function fetchTemperatureFailed(error) {
  return {
    type: actiontypes.FETCHING_TEMPERATURE_FAILED
  };
}

export function createSocket() {
  return {
    type: actiontypes.CREATE_SOCKET
  };
}

export function createSocketSuccess(socket) {
  return {
    type: actiontypes.CREATE_SOCKET_SUCCESS,
    payload: socket
  };
}

export function createSocketFailed() {
  return {
    type: actiontypes.CREATE_SOCKET_FAILED
  };
}

export const destroy = dispatch => {
  socket.emit('disconnect');
  dispatch(destroySocket());
};

export function destroySocket() {
  return {
    type: actiontypes.DESTROY_SOCKET
  };
}

export function setUsername(name) {
  return {
    type: actiontypes.SET_USERNAME,
    payload: name
  };
}

export function allNames(allnames) {
  return {
    type: actiontypes.ALLNAMES_TO_SERVER,
    payload: allnames
  };
}
