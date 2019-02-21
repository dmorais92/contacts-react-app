import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "../utils/classnames";
import "./Card.css";

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
    const { children, classes, vertical } = this.props;
    const classNames = [(vertical && "vertical") || "", ...classes];
    return <div className={`Card${cx(classNames)}`}>{children}</div>;
  }
}

export default Card;
