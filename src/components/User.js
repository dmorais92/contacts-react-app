import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import Card from "./common/Card";

import "./User.scss";
import chunk from "../utils/chunk";

class UserList extends PureComponent {
  static propTypes = {
    users: PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      address: PropTypes.object,
      phone: PropTypes.string,
      website: PropTypes.string,
      company: PropTypes.object
    })
  };

  render() {
    const { user } = this.props;
    const { name, id, username, email, address, ...userInfo } = user;
    const extraFields = userInfo && Object.keys(userInfo);

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
        {extraFields.length &&
          chunk(extraFields, 3).map(section => (
            <div className="user-info">
              {section.map(field => (
                <span>{field}</span>
              ))}
            </div>
          ))}
      </Card>
    );
  }
}

export default UserList;
