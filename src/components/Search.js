import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "../utils/classnames";

import "./Search.scss";

class Search extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]),
    classes: PropTypes.array
  };

  static defaultProps = {
    children: null,
    classes: []
  };

  render() {
    const { children, classes, ...otherProps } = this.props;
    const classNames = [...classes];

    return (
      <input className={`Search${cx(classNames)}`} {...otherProps}/>
    );
  }
}

export default Search;
