import React, { Component, PropTypes } from 'react'
import Autocomplete from 'react-autocomplete'

import Chip from './Chip';

export default class Chips extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      chips: ["Hello", "Goodbye", "Taco", "Pizza"],
    };
  }

  itemSelected = (value) => {
    let chips = [...this.state.chips, value]
    this.setState({chips, value: ""})
  }

  onChange = (value) => {
    if (value.indexOf(',') !== -1) {
      let chips = value.split(",").map((val) => val.trim()).filter((val) => val !== "");
      this.setState({chips: this.state.chips.concat(chips), value: ""});
    } else {
      this.setState({value})
    }
  }

  renderChips = () => {
    return this.state.chips.map((chip, idx) => {
      return <Chip key={`chip${idx}`} value={chip} />
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {this.renderChips()}
        <Autocomplete
          value={this.state.value}
          inputProps={{name: "US state", id: "states-autocomplete", style: {
            border: "0",
            outline: "none",
            boxSizing: "border-box",
            width: "98%",
            padding: 5,
            marginLeft: 5,
            background: "red",
          }}}
          wrapperStyle={{
            display: "block",
            flexGrow: 1,
          }}
          items={["Ruby", "Java", "CSS", "Javascript"]}
          getItemValue={(item) => item}
          shouldItemRender={(opt, val) => opt.toLowerCase().indexOf(val.toLowerCase()) !== -1}
          onChange={(event, value) => this.onChange(value)}
          onSelect={value => this.itemSelected(value)}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
            >{item}</div>
          )}
          />
      </div>
    );
  }
}

export let styles = {
  container: {
    display: "flex",
    position: "relative",
    border: "1px solid #ccc",
    font: "13.33333px Arial",
    minHeight: 24,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "2.5px",
  },
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
}
