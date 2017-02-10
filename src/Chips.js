import React, { Component, PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';
import Radium from 'radium';
import themeable from 'react-themeable';

import theme from './theme';
import Chip from './Chip';

class Chips extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      chipSelected: false,
      suggestions: []
    };
  }

  onBlur = e => {
    this.refs.wrapper.focus();
  }

  onFocus = e => {
    this.refs.wrapper.blur();
  }

  handleKeyDown = e => {
    if (!this.props.fromSuggestionsOnly && e.keyCode === 9) {
      e.preventDefault();
      if (this.state.value.trim()) this.addChip(this.state.value);
    }
    if (e.keyCode === 8) {
      this.onBackspace();
    } else if (this.state.chipSelected) {
      this.setState({chipSelected: false});
    }
  }

  onBackspace = (code) => {
    if (this.state.value === "" && this.props.value.length > 0) {
      if (this.state.chipSelected) {
        const nextChips = this.props.value.slice(0, -1);
        this.setState({
          chipSelected: false,
          chips: nextChips,
        });
        this.props.onChange(nextChips);
      } else {
        this.setState({chipSelected: true})
      }
    }
  }

  addChip = (value) => {
    if (this.props.uniqueChips && this.props.value.indexOf(value) !== -1) {
      this.setState({value: ""});
      return;
    }
    let chips = [...this.props.value, value]
    this.props.onChange(chips);
    this.setState({ value: "" })
  }

  removeChip = idx => () => {
    let left = this.props.value.slice(0, idx);
    let right = this.props.value.slice(idx + 1);
    const nextChips = [...left, ...right];
    this.props.onChange(nextChips);
  }

  renderChips = () => {
    return this.props.value.map((chip, idx) => {
      return (
        React.cloneElement(this.props.renderChip(chip), {
          selected: this.state.chipSelected && idx === this.props.value.length - 1,
          onRemove: this.removeChip(idx),
          index: idx,
          key: `chip${idx}`,
        })
      );
    });
  }

  getItems = () => {
    if (this.props.uniqueChips) {
      return this.props.suggestions.filter(item => this.props.value.indexOf(this.props.getChipValue(item)) === -1);
    } else {
      return this.props.suggestions;
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { suggestions, suggestionsFilter } = this.props;
    this.setState({
      suggestions: this.getItems().filter(opts => suggestionsFilter(opts, value))
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []})
  }

  onChange = (e, { newValue }) => {
    if (!this.props.fromSuggestionsOnly && newValue.indexOf(',') !== -1) {
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
    const { placeholder, renderSuggestion, getSuggestionValue, shouldRenderSuggestions } = this.props;
    const themr = themeable(this.props.theme);

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
      onKeyDown: this.handleKeyDown,
      onBlur: this.onBlur,
      onFocus: this.onFocus
    };

    return (
      <div {...themr(200, 'chipsContainer')} ref="wrapper" >
        {this.renderChips()}
        <Autosuggest
          theme={this.props.theme}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={(e, {suggestion}) => this.addChip(suggestion)}
        />
      </div>
    );
  }
}

Chips.propTypes = {
  placeholder: PropTypes.string,
  theme: PropTypes.object,
  suggestions: PropTypes.array,
  fromSuggestionsOnly: PropTypes.bool,
  uniqueChips: PropTypes.bool,
  chips: PropTypes.array,
  shouldRenderSuggestions: PropTypes.func,
  getSuggestionValue: PropTypes.func,
  onChange: PropTypes.func,
  renderChip: PropTypes.func,
  renderSuggestion: PropTypes.func,
  suggestionsFilter: PropTypes.func,
  getChipValue: PropTypes.func,
};

Chips.defaultProps = {
  placeholder: '',
  theme: theme,
  suggestions: [],
  fromSuggestionsOnly: false,
  uniqueChips: true,
  getSuggestionValue: s => s,
  chips: [],
  onChange: () => {},
  renderChip: (value) => (<Chip>{value}</Chip>),
  renderSuggestion: (suggestion, { query }) => <span>{suggestion}</span>,
  suggestionsFilter: (opt, val) => opt.toLowerCase().indexOf(val.toLowerCase()) !== -1,
  getChipValue: (item) => item,
};
export default Radium(Chips);
