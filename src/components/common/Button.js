import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "../../utils/classnames";

import "./Button.scss";

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    classes: PropTypes.array,
  };

  static defaultProps = {
    children: null,
    classes: [],
  };

  render() {
    const { children, classes, ...otherProps } = this.props;
    const classNames = [...classes];

    return <button className={`Button${cx(classNames)}`} {...otherProps}>{children}</button>;
  }
}

export default Button;
