export const ACTION_TYPES = {
  USERS: {
    GET_USERS: 'GET_USERS',
    GET_USERS_FAILED: 'GET_USERS_FAILED',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  }
};

export const getUsers = () => ({
  type: ACTION_TYPES.USERS.GET_USERS,
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.USERS.GET_USERS_SUCCESS,
  users,
});

export const getUsersFailed = (e) => ({
  type: ACTION_TYPES.USERS.GET_USERS_FAILED,
  error: e
})