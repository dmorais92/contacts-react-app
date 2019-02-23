import { connect } from "react-redux";
import { getUsers, getUsersFailed, getUsersSuccess } from "../store/actions";
import UserList from "../components/UserList";
import api from "../api";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.userList,
    isFetchingUsers: state.users.isFetchingUsers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
      try {
        api
          .get("/users")
          .then(res => res && res.data && dispatch(getUsersSuccess(res.data)))
          .catch(() => {
            throw new Error("Could not retrieve contacts");
          });
      } catch (e) {
        dispatch(getUsersFailed(e));
      }
    }
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;
