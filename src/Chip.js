import React, { Component, PropTypes } from 'react'

export default class Chip extends Component {
  render() {
    return (
      <div style={style}>{this.props.value}</div>
    );
  }
}

let style = {
  padding: 5,
  background: "#ccc",
  margin: "2.5px",
}
