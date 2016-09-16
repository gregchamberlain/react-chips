import React, { Component, PropTypes } from 'react'
import Radium from 'radium';
import themeable from 'react-themeable';

import { defaultStyles } from './Styles';

class Chip extends Component {

  onRemoveClicked = (e) => {
    this.props.onRemove(this.props.index);
  }

  render() {

    const { style, selected, theme } = this.props;

    return (
      <div style={selected ? {...style.default, ...style.selected} : style.default}>
        {this.props.value}
        <span
          style={styles.close}
          onClick={this.onRemoveClicked}> &times;</span>
      </div>
    );
  }
}

Chip.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool,
  onRemove: PropTypes.func,
}

Chip.defaultProps = {
  selected: false,
  style: defaultStyles.chip,
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
