export const ACTION_TYPES = {
  USERS: {
    GET_USERS: 'GET_USERS',
    GET_USERS_FAILED: 'GET_USERS_FAILED',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    SEARCH_USERS: 'SEARCH_USERS'
  }
};

export const getUsers = () => ({
  type: ACTION_TYPES.USERS.GET_USERS,
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.USERS.GET_USERS_SUCCESS,
  users,
});

export const getUsersFailed = e => ({
  type: ACTION_TYPES.USERS.GET_USERS_FAILED,
  error: e
})

export const searchUsers = query => ({
  type: ACTION_TYPES.USERS.SEARCH_USERS,
  query,
})