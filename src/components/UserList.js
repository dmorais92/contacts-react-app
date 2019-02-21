import React, { PureComponent, Fragment } from "react";
import PropTypes from 'prop-types';
import TEST_USERS from '../dev/users.json';
import Card from './common/Card';

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.oneOf([PropTypes.array, null])

  }

  render() {

    const users = (this.props.users && this.props.users.length) || TEST_USERS;

    return (
      <Fragment>
        <h2>
          Contact List
        </h2>
        {
          users.map(user => {
            const {name, id, email} = user;
            return (
              <Card vertical key={id}>
                <h3>{name}</h3>
                <span>{email}</span>
              </Card>
            )
          })
        }
      </Fragment>
    );
  }
}

export default UserList;
