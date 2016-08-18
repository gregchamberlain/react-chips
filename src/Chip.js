import React, { Component, PropTypes } from 'react'
import Radium from 'radium';

import { defaultStyles } from './Styles';

class Chip extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.props.value}
        <span
          style={styles.close}
          onClick={() => this.onClick(this.props.value)}> &times;</span>
      </div>
    );
  }
}

Chip.propTypes = {
  style: PropTypes.object
}

Chip.defaultProps = {
  style: defaultStyles.chip
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