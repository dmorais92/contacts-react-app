import { ACTION_TYPES } from "./actions";

export default function users(
  state = {
    selectedUser: null,
    userList: []
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.KEYBOARD.UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.users.map(user => ({
          id: user.id,
          name: user.name,
          phone: user.phone
        }))
      };
    case ACTION_TYPES.KEYBOARD.ARROW_DOWN:
      return {
        ...state,
        selectedUser:
          state.selectedUser === null
            ? 0
            : state.selectedUser === state.userList.length
            ? 0
            : state.selectedUser + 1
      };
    case ACTION_TYPES.KEYBOARD.ARROW_UP:
      return {
        ...state,
        selectedUser:
          state.selectedUser === null
            ? state.userList.length
            : state.selectedUser === 0
              ? state.userList.length
              : state.selectedUser - 1
      };
    case ACTION_TYPES.KEYBOARD.SELECT_USER:
      return {
        ...state,
        selectedUser: action.index,
      }
    default:
      return state;
  }
}
