import {ACTION_TYPES} from "./actions";

export default function users(
  state = {
    userList: [],
    isFetchingUsers: false,
    error: '',
    query: '',
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.USERS.GET_USERS:
      return {
        ...state,
        isFetchingUsers: true
      };
    case ACTION_TYPES.USERS.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetchingUsers: false,
        userList: action.users
      };
    case ACTION_TYPES.USERS.GET_USERS_FAIL:
      return {
        ...state,
        isFetchingUsers: false,
        error: action.error,
      };
      case ACTION_TYPES.USERS.SEARCH_USERS:
        return {
          ...state,
          query: action.query,
        };
    default:
      return state;
  }
}