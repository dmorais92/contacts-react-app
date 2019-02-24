export const ACTION_TYPES = {
  USERS: {
    GET_USERS: "GET_USERS",
    GET_USERS_FAILED: "GET_USERS_FAILED",
    GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
    SEARCH_USERS: "SEARCH_USERS"
  },
  KEYBOARD: {
    UPDATE_USER_LIST: "UPDATE_USER_LIST",
    SELECT_USER: "SELECT_USER",
    ARROW_UP: "ARROW_UP",
    ARROW_DOWN: "ARROW_DOWN",
    ENTER: "ENTER"
  }
};

export const getUsers = () => ({
  type: ACTION_TYPES.USERS.GET_USERS
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.USERS.GET_USERS_SUCCESS,
  users
});

export const getUsersFailed = e => ({
  type: ACTION_TYPES.USERS.GET_USERS_FAILED,
  error: e
});

export const searchUsers = query => ({
  type: ACTION_TYPES.USERS.SEARCH_USERS,
  query
});

export const updateUserList = users => ({
  type: ACTION_TYPES.KEYBOARD.UPDATE_USER_LIST,
  users
});

export const selectNextUser = () => ({
  type: ACTION_TYPES.KEYBOARD.ARROW_DOWN
});

export const selectUser = index => ({
  type: ACTION_TYPES.KEYBOARD.SELECT_USER,
  index
});

export const selectPreviousUser = () => ({
  type: ACTION_TYPES.KEYBOARD.ARROW_UP
});
