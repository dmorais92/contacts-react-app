import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Search from "./Search";

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.array
  };

  componentDidMount() {
    if (this.props.getUsers) {
      this.props.getUsers();
    }
  }

  render() {
    const {
      users,
      isFetchingUsers,
      searchUsers,
      selectedUser,
      selectUser,
      selectNextUser,
      selectPreviousUser
    } = this.props;

    return (
      <Fragment>
        <Search onChange={e => searchUsers(e.target.value)} />
        {users && users.length ? (
          users.map((user, i) => (
            <User
              tabIndex="0"
              user={user}
              key={user.name}
              keyboardControls={{ selectNextUser, selectPreviousUser }}
              selected={selectedUser === i}
              onFocus={() => selectUser(i)}
            />
          ))
        ) : (
          <h3>
            {isFetchingUsers ? "Loading contacts..." : "No contacts found"}
          </h3>
        )}
      </Fragment>
    );
  }
}

export default UserList;
