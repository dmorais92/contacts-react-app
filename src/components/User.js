import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "./common/Card";
import Icon from "./common/Icon";
import Button from "./common/Button";

import "./User.scss";
import { chunk, capitalize } from "../utils";

const renderGeoFields = coords => {
  const { lat, lng } = coords;
  return (
    (lat && lng && (
      <div className="geo-fields title-value" key="geo">
        <a
          tabIndex="-1"
          target="blank"
          href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        >
          <h5>
            Location
            <Icon icon="geo" size="xs" color="primary" />
          </h5>
          <span>
            {lat}º, {lng}º
          </span>
        </a>
      </div>
    )) ||
    ""
  );
};

class User extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      address: PropTypes.object,
      phone: PropTypes.string,
      website: PropTypes.string,
      company: PropTypes.object
    }),
    selected: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

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

  onKeyDown(e) {
    const { keyboardControls } = this.props;
    if (e.keyCode === 13) {
      this.state.expanded
        ? window.open(`tel:${this.phoneNumber}`, "_blank")
        : this.setState({ expanded: true });
    }
    if (e.keyCode === 37) {
      this.setState({expanded: false})
    }
    if (e.keyCode === 39) {
      this.setState({expanded: true})
    }
    if (e.keyCode === 40) {
      e.preventDefault();
      keyboardControls.selectNextUser();
    }
    if (e.keyCode === 38) {
      e.preventDefault();
      keyboardControls.selectPreviousUser();
    }
  }

  renderExpandButton() {
    const { expanded } = this.state;
    return (
      <Icon
        icon={expanded ? "close" : "open"}
        onClick={() => this.setState({ expanded: !expanded })}
      />
    );
  }

  get phoneNumber() {
    const { user } = this.props;
    return user.phone.replace(/\D/g, "");
  }

  render() {
    const { user, tabIndex, onFocus, selected } = this.props;

    if (user) {
      const { name, id, username, email, address, company, ...userInfo } = user;
      const extraFields = userInfo && Object.keys(userInfo);
      return (
        <Card
          vertical
          key={id}
          classes={["User"]}
          onKeyDown={e => this.onKeyDown(e)}
          tabIndex={tabIndex}
          onFocus={onFocus}
          selected={selected}
        >
          <div className="row">
            <Icon icon="user" size="m" />
            <div className="main-info">
              <h3>{name}</h3>
              <span>{email}</span>
              <span>{username}</span>
            </div>
            {this.renderExpandButton()}
          </div>
          {this.state.expanded ? (
            <Fragment>
              {this.renderUserFields(extraFields)}
              {this.renderUserFields(Object.keys(address), address)}
              <Button classes={["contact-button"]} tabIndex="-1">
                <a href={`tel:${this.phoneNumber}`} tabIndex="-1">
                  {user.phone}
                  <Icon icon="mobile" size="s" color="secondary" />
                </a>
              </Button>
            </Fragment>
          ) : (
            ""
          )}
        </Card>
      );
    }
    return "";
  }
}

export default User;
