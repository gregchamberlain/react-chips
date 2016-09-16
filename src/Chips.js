import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import Autosuggest from 'react-autosuggest';
import Radium from 'radium';

import Chip from './Chip';
import { defaultStyles } from './Styles'

class Chips extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      chips: props.chips,
      chipSelected: false,
      suggestions: []
    };
  }

  componentDidMount = () => {
    let input = document.getElementById('autocomplete-input');
    let chips = document.getElementById('chips-wrapper');
    input.addEventListener('focus', (e) => {
      chips.focus();
    });
    input.addEventListener('blur', (e) => {
      chips.blur();
    });
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 8) {
        this.onBackspace();
      } else if (this.state.chipSelected) {
        this.setState({chipSelected: false});
      }
    });
  }

  onBackspace = (code) => {
    if (this.state.value === "" && this.state.chips.length > 0) {
      if (this.state.chipSelected) {
        this.setState({
          chipSelected: false,
          chips: this.state.chips.slice(0,-1),
        })
      } else {
        this.setState({chipSelected: true})
      }
    }
  }

  onAutocompleteChange = (value) => {
    if (!this.props.autoCompleteOnly && value.indexOf(',') !== -1) {
      let chips = value.split(",").map((val) => val.trim()).filter((val) => val !== "");
      chips.forEach(chip => {
        this.addChip(chip)
      });
    } else {
      this.setState({value})
    }
  }

  addChip = (e, { suggestion }) => {
    // let newChip = this.props.getChipValue(object === undefined ? value : object)
    if (this.props.uniqueChips && this.state.chips.indexOf(suggestion) !== -1) {
      this.setState({value: ""});
      return;
    }
    let chips = [...this.state.chips, suggestion]
    this.setState({chips, value: ""})
    this.props.onChange(this.state.chips);
  }

  removeChip = (idx) => {
    let { chips } = this.state;
    let left = chips.slice(0, idx);
    let right = chips.slice(idx + 1);
    this.setState({chips: [...left, ...right]});
    this.props.onChange(this.state.chips);
  }

  renderChips = () => {
    return this.state.chips.map((chip, idx) => {
      return (
        React.cloneElement(this.props.renderChip(chip), {
          selected: this.state.chipSelected && idx === this.state.chips.length - 1,
          onRemove: this.removeChip,
          index: idx,
          key: `chip${idx}`,
        })
      );
    });
  }

  getItems = () => {
    if (this.props.uniqueChips) {
      return this.props.autoCompleteData.filter(item => this.state.chips.indexOf(this.props.getChipValue(item)) === -1);
    } else {
      return this.props.autoCompleteData;
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    console.log(value);
    const { autoCompleteData, listFilter } = this.props;
    this.setState({
      suggestions: autoCompleteData.filter(opts => listFilter(opts, value))
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []})
  }

  onChange = (e, { newValue}) => {
    this.setState({value: newValue});
  }

  render() {

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return (
      <div style={this.props.style} id="chips-wrapper" >
        {this.renderChips()}
        <Autosuggest
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          renderSuggestion={item => <span>{item}</span>}
          inputProps={inputProps}
          getSuggestionValue={sugg => sugg}
          onSuggestionSelected={this.addChip}
        />
        {/* <Autocomplete
          value={this.state.value}
          inputProps={inputProps}
          wrapperStyle={styles.wrapper}
          menuStyle={styles.menu}
          items={this.getItems()}
          getItemValue={() => ""}
          shouldItemRender={this.props.listFilter}
          onChange={(event, value) => this.onAutocompleteChange(value)}
          onSelect={this.addChip}
          renderItem={this.props.renderListItem}
          /> */}
      </div>
    );
  }
}



let styles = {
  // menu: {
  //   border: 'solid 1px #ccc'
  // },
  input: {
    border: "0",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
    padding: 5,
  },
  wrapper: {
    display: "block",
    margin: 2.5,
    flexGrow: 1,
  },
  menu: {
    position: "absolute",
    left: 0,
    right: 0,
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    overflow: 'auto',
    maxHeight: '100px',
  }
}

let inputProps = {
  id: "autocomplete-input", style: styles.input
}

Chips.propTypes = {
  style: PropTypes.object,
  autoCompleteData: PropTypes.array,
  autoCompleteOnly: PropTypes.bool,
  uniqueChips: PropTypes.bool,
  chips: PropTypes.array,
  onChange: PropTypes.func,
  renderChip: PropTypes.func,
  renderListItem: PropTypes.func,
  listFilter: PropTypes.func,
  getChipValue: PropTypes.func,
};

Chips.defaultProps = {
  style: defaultStyles.wrapper,
  autoCompleteData: [],
  autoCompleteOnly: false,
  uniqueChips: true,
  chips: [],
  onChange: () => {},
  renderChip: (value) => (<Chip value={value}/>),
  renderListItem: (item, isHighlighted) => (
    <div
      style={isHighlighted ? {
        ...defaultStyles.listItem.default,
        ...defaultStyles.listItem.highlighted
      } : defaultStyles.listItem.default}
      key={JSON.stringify(item)}
    >{item}</div>
  ),
  listFilter: (opt, val) => opt.toLowerCase().indexOf(val.toLowerCase()) !== -1,
  getChipValue: (item) => item,
};
export default Radium(Chips);
