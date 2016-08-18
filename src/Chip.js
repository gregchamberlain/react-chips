import React, { Component, PropTypes } from 'react'
import Radium from 'radium';

import { defaultStyles } from './Styles';

class Chip extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.index);
  }

  render() {

    let { style, selected } = this.props;

    return (
      <div style={selected ? {...style.default, ...style.selected} : style.default}>
        {this.props.value}
        <span
          style={styles.close}
          onClick={() => this.onClick(this.props.value)}> &times;</span>
      </div>
    );
  }
}

Chip.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
}

Chip.defaultProps = {
  selected: false,
}

let styles = {
  close: {
    fontWeight: "bold",
    cursor: "pointer",
    ':hover': {
      color: 'red',
    },
  }
}


export default Radium(Chip);