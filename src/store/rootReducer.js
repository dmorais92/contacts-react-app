import { combineReducers } from 'redux';
import users from './usersReducer';

const Root = combineReducers({
  users,
});
export default Root;
