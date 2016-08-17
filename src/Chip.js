import React, { Component, PropTypes } from 'react'

export default class Chip extends Component {

  onClick = (e) => {
    console.log(e)
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
  },
  close: {
    fontWeight: "bold",
    cursor: "pointer",
  }
}
