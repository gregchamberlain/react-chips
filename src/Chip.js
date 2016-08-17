import React, { Component, PropTypes } from 'react'
import Radium from 'radium';

class Chip extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div style={styles.container}>
        {this.props.value}
        <span
          style={styles.close}
          onClick={() => this.onClick(this.props.value)}> &times;</span>
      </div>
    );
  }
}


let styles = {
  container: {
    padding: 5,
    background: "#ccc",
    margin: "2.5px",
    borderRadius: 3,
    cursor: 'default',
  },
  close: {
    fontWeight: "bold",
    cursor: "pointer",
    ':hover': {
      color: 'red',
    },
  }
}


export default Radium(Chip);