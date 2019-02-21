import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import TEST_USERS from "../dev/users.json";
import User from "./User";

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.oneOf([PropTypes.array, null])
  };

  render() {
    const users = (this.props.users && this.props.users.length) || TEST_USERS;

    return (
      <Fragment>
        <h2>Contact List</h2>
        {users.map(user => <User user={user} />)  }
      </Fragment>
    );
  }
}

export default UserList;
