import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './rootReducer';

const store = createStore(RootReducer, {
  users: {
    userList: [],
  }
}, applyMiddleware(logger, thunk));


export default store;
