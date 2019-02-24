import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Icon.scss";

class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.oneOf([
      "mobile",
      "geo",
      "user",
      "logo",
      "open",
      "close",
      "search"
    ]),
    size: PropTypes.oneOf(["s", "m", "l", "xl", "xs"]),
    color: PropTypes.oneOf(["primary", "secondary"])
  };

  static defaultProps = {
    icon: null
  };

  render() {
    const { icon, size = "m", color = "primary", ...otherProps } = this.props;
    switch (icon) {
      case "user":
        return (
          <i className={`Icon far fa-user ${size} ${color}`} {...otherProps} />
        );
      case "search":
        return (
          <i
            className={`Icon fas fa-search ${size} ${color}`}
            {...otherProps}
          />
        );
      case "logo":
        return (
          <i
            className={`Icon fas fa-user-circle ${size} ${color}`}
            {...otherProps}
          />
        );
      case "geo":
        return (
          <i
            className={`Icon fas fa-location-arrow ${size} ${color}`}
            {...otherProps}
          />
        );
      case "open":
        return (
          <i
            className={`Icon fas fa-angle-down ${size} ${color}`}
            {...otherProps}
          />
        );
      case "close":
        return (
          <i
            className={`Icon fas fa-angle-up ${size} ${color}`}
            {...otherProps}
          />
        );
      case "mobile":
        return (
          <i className={`Icon fas fa-phone ${size} ${color}`} {...otherProps} />
        );
      default:
        return (
          <i className={`Icon ${icon} ${size} ${color}`} {...otherProps} />
        );
    }
  }
}

export default Icon;
