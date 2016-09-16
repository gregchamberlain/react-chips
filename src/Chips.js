import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import Autosuggest from 'react-autosuggest';
import Radium from 'radium';

import theme from './theme';
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
    this.chips = document.getElementById('chips-wrapper');
  }

  onBlur = e => {
    this.chips.focus();
  }

  onFocus = e => {
    this.chips.blur();
  }

  handleKeyDown = e => {
    if (!this.props.autoCompleteOnly && (e.keyCode === 13 || e.keyCode === 9)) {
      e.preventDefault();
      this.addChip(this.state.value);
    }
    if (e.keyCode === 8) {
      this.onBackspace();
    } else if (this.state.chipSelected) {
      this.setState({chipSelected: false});
    }
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

  addChip = (value) => {
    // let newChip = this.props.getChipValue(object === undefined ? value : object)
    if (this.props.uniqueChips && this.state.chips.indexOf(value) !== -1) {
      this.setState({value: ""});
      return;
    }
    let chips = [...this.state.chips, value]
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
    const { autoCompleteData, listFilter } = this.props;
    this.setState({
      suggestions: this.getItems().filter(opts => listFilter(opts, value))
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []})
  }

  onChange = (e, { newValue }) => {
    if (!this.props.autoCompleteOnly && newValue.indexOf(',') !== -1) {
      let chips = newValue.split(",").map((val) => val.trim()).filter((val) => val !== "");
      chips.forEach(chip => {
        this.addChip(chip)
      });
    } else {
      this.setState({value: newValue});
    }
  }

  render() {

    const { value, suggestions } = this.state;
    const { placeholder } = this.props;

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
      onKeyDown: this.handleKeyDown,
      onBlur: this.onBlur,
      onFocus: this.onFocus
    };

    return (
      <div style={this.props.style} id="chips-wrapper" >
        {this.renderChips()}
        <Autosuggest
          theme={this.props.theme}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          renderSuggestion={item => <span>{item}</span>}
          inputProps={inputProps}
          getSuggestionValue={sugg => sugg}
          onSuggestionSelected={(e, {suggestion}) => this.addChip(suggestion)}
        />
      </div>
    );
  }
}


let styles = {
  // menu: {
  //   border: 'solid 1px #ccc'
  // },
  input: {
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
  placeholder: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
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
  placeholder: '',
  theme: theme,
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
