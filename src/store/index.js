import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import RootReducer from './rootReducer';

const store = createStore(RootReducer, {
  users: {
    userList: [],
  }
}, applyMiddleware(logger));


export default store;
