import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class CustomChip extends Component {
  render() {
    return (
      <div style={this.props.selected ? {...styles.container, ...styles.selected} : styles.container}>
        <img style={styles.image} src={this.props.image} />
        <div style={styles.text}>{this.props.children}</div>
        <div style={styles.remove} onClick={() => this.props.onRemove(this.props.index)}>&times;</div>
      </div>
    );
  }
}

let styles = {
  selected: {
    background: "#666",
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: 32,
    boxSizing: 'border-box',
    color: "#eee",
    fontWeight: 'bold',
    background: "#333",
    margin: "2.5px",
    borderRadius: 16,
    cursor: 'default',
  },
  image: {
    width: 24,
    height: 24,
    margin: 4,
    overflow: 'hidden',
    borderRadius: 12,
    background: "#888",
  },
  text: {
    fontSize: 13,
    boxSizing: 'border-box',
    padding: '0px 4px 0px 8px',
  },
  remove: {
    textAlign: "center",
    cursor: "pointer",
    fontSize: 18,
    width: 20,
    height: 20,
    color: "#e0e0e0",
    borderRadius: 12,
    background: "#666",
    margin: "0 6px"
  }
}

export default Radium(CustomChip)
