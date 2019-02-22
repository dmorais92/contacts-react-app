import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import Card from "./common/Card";

import "./User.scss";
import { chunk, capitalize } from "../utils";

const renderGeoFields = coords => {
  const { lat, lng } = coords;
  return (
    (lat && lng && (
      <div className="geo-fields title-value" key="geo">
        <a
          target="blank"
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        >
          <h5>Location</h5>
          <span>
            {lat}º, {lng}º
          </span>
        </a>
      </div>
    )) ||
    ""
  );
};

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

  renderUserFields(fields, target = this.props.user) {
    if (fields && fields.length) {
      return chunk(fields, 3).map(section => (
        <div className="info-section" key={`${fields}-${section}`}>
          {section.map(field => {
            switch (field) {
              case "geo":
                return renderGeoFields(target[field]);
              default:
                return (
                  <div
                    className="title-value"
                    key={`${field}-${target[field]}`}
                  >
                    <h5>{capitalize(field)}</h5>
                    <span>{target[field]}</span>
                  </div>
                );
            }
          })}
        </div>
      ));
    }
  }

  render() {
    const { user } = this.props;
    if (user) {
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
          {this.renderUserFields(Object.keys(address), address)}
        </Card>
      );
    }
    return '';
  }
}

export default UserList;
