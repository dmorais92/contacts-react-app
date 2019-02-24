import { combineReducers } from "redux";
import users from "./usersReducer";
import keyboard from "./keyboardReducer";

const Root = combineReducers({
  users,
  keyboard
});
export default Root;
