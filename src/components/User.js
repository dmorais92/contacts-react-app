import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import Card from "./common/Card";

import "./User.scss";

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.object
  };

  render() {
    const { user } = this.props;
    const { name, id, username, email, ...userInfo } = user;
    return (
      <Card vertical key={id} classes={["User"]}>
        <div className="row">
          <img src={logo} className="logo" alt="logo" />
          <div className="main-info">
            <h3>{name}</h3>
            <span>{email}</span>
            <span>{username}</span>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserList;
