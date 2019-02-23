import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Search from "./Search";

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.array,
  };

  componentDidMount() {
    if (this.props.getUsers) {
      this.props.getUsers();
    }
  }

  render() {
    const {users, isFetchingUsers} = this.props;

    return (
      <Fragment>
        <Search/>
        {
          users && users.length ?
            users.map(user => <User user={user} key={user.name}/>)
          :
            <h3>{isFetchingUsers ? 'Loading contacts...' : 'No contacts found'}</h3>
        }
      </Fragment>
    );
  }
}

export default UserList;
