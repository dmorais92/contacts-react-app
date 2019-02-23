import ACTION_TYPES from "./actions";

export default function users(
  state = {
    users: [],
    isFetchingUsers: false,
    error: ""
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
        users: action.users
      };
    case ACTION_TYPES.USERS.GET_USERS_FAIL:
      return {
        ...state,
        isFetchingUsers: false,
        error: action.error,
      };
    default:
      return state;
  }
}