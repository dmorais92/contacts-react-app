import { combineReducers } from 'redux';
import Users from './usersReducer';

const Root = combineReducers({
  Users,
});
export default Root;
