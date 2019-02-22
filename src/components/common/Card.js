import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "../../utils/classnames";

import "./Card.scss";

class Card extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    classes: PropTypes.array,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    classes: [],
    vertical: false
  };

  render() {
    const { children, classes, vertical, ...otherProps } = this.props;
    const classNames = [(vertical && "vertical") || null, ...classes];

    return <div className={`Card${cx(classNames)}`} {...otherProps}>{children}</div>;
  }
}

export default Card;
