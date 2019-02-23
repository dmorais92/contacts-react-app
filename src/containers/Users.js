import { connect } from "react-redux";
import { getUsers, getUsersFailed, getUsersSuccess, searchUsers } from "../store/actions";
import UserList from "../components/UserList";
import api from "../api";

const filterUsersByQuery = (query, users) => {
  if (users && users.length) {
    return (query && users.filter(user => {
      const propMatchesSearchInput = prop =>
      user &&
      user[prop].toLowerCase().startsWith(query.toLowerCase());
      return (
        propMatchesSearchInput('email') ||
        propMatchesSearchInput('username') ||
        propMatchesSearchInput('name')
      );
    })) || users;
  }
  return [];
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: filterUsersByQuery(state.users.query, state.users.userList),
    isFetchingUsers: state.users.isFetchingUsers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
        api
          .get("/users")
          .then(res => res && res.data && dispatch(getUsersSuccess(res.data)))
          .catch(() => {
            dispatch(getUsersFailed("Could not retrieve contacts"));
          });
    },
    searchUsers: val => dispatch(searchUsers(val)),
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;
