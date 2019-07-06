import io from 'socket.io-client';
import * as actions from '../store/actions/actions';
import * as actionTypes from '../store/actions/actionTypes';
const SOCKET_ENDPOINT = 'http://127.0.0.1:4001';

const socket = io(SOCKET_ENDPOINT);
const createSocket = dispatch => {
  socket.on('connect', () => {
    dispatch(actions.createSocketSuccess(socket));
  });
  socket.on('FromAPI', data => setresponse(data));
};
