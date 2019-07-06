import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import temperatureReducer from './reducers/temperatureReducer';
import socketReducer from './reducers/socketReducer';
const configStore = () => {
  const rootReducer = combineReducers({
    temperatureReducer,
    socketReducer
  });
  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  return store;
};

export default configStore;
