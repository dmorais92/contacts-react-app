import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from "../utils/classnames";
import Icon from "./common/Icon";

import "./Search.scss";

class Search extends PureComponent {
  static propTypes = {
    classes: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    classes: []
  };

  render() {
    const { classes, onChange, ...otherProps } = this.props;
    const classNames = [...classes];

    return (
      <div className="SearchContainer">
        <div className="search-label">
          <Icon icon="search" size="xs" />
          <h4>Search</h4>
        </div>
        <input
          className={`Search${cx(classNames)}`}
          onChange={e => onChange(e)}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Search;
