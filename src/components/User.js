import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import Card from "./common/Card";

import "./User.scss";
import chunk from "../utils/chunk";

class UserList extends PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      address: PropTypes.object,
      phone: PropTypes.string,
      website: PropTypes.string,
      company: PropTypes.object
    })
  };

  renderUserFields(fields) {
    const { user } = this.props;
    if (fields && fields.length) {
      return(
        chunk(fields, 3).map(section => (
          <div className="info-section" key={`${fields}-${section}`}>
            {section.map(field =>
              (
                <div className="title-value" key={`${field}-${user[field]}`}>
                  <h5>{field}</h5>
                  <span>{user[field]}</span>
                </div>
              )
            )}
          </div>
        ))
      )

    }
  }

  render() {
    const { user } = this.props;
    const { name, id, username, email, address, company, ...userInfo } = user;
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
        {this.renderUserFields(extraFields)}
      </Card>
    );
  }
}

export default UserList;
