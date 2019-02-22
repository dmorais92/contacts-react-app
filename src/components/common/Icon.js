import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Icon.scss";

class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.oneOf(["mobile", "geo", "user", "logo"]),
    size: PropTypes.oneOf(["s", "m", "l", "xl"]),
    color: PropTypes.oneOf(["primary", "secondary"])
  };

  static defaultProps = {
    icon: null
  };

  render() {
    const { icon, size="m", color="primary" } = this.props;
    switch (icon) {
      case "user":
        return <i className={`Icon far fa-user ${size} ${color}`} />;
      case "logo":
        return <i className={`Icon fas fa-user-circle ${size} ${color}`} />;
      case "geo":
        return <i className={`Icon fas fa-location-arrow ${size} ${color}`} />;
      case "mobile":
        return <i className={`Icon fas fa-phone ${size} ${color}`} />;
      default:
        return <i className={`Icon far fa-user ${size} ${color}`} />;
    }
  }
}

export default Icon;
