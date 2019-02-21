import React, { PureComponent, Fragment } from "react";
import TEST_USERS from '../dev/users.json';
import Card from './common/Card';

class UserList extends PureComponent {
  render() {
    const users = TEST_USERS;

    return (
      <Fragment>
        <h2>
          Contact List
        </h2>
        {
          users.map(user => {
            const {name, id, email} = user;
            return (
              <Card key={id}>
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
