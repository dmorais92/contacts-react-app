import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import RootReducer from './rootReducer';

const store = createStore(RootReducer, applyMiddleware(logger));


export default store;
