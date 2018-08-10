import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Radium from 'radium';
import themeable from 'react-themeable';

import theme from './theme';
import Chip from './Chip';
import CallLimiter from './CallLimiter';
import { chipTheme } from './theme'

class Chips extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      value: "",
      chipSelected: false,
      suggestions: []
    };

    this.asyncSuggestLimiter = 
      new CallLimiter(this.callFetchSuggestions.bind(this), 1000 / props.fetchSuggestionsThrushold);
  }

  componentWillReceiveProps = (nextProps) => {
    this.asyncSuggestLimiter.interval = (1000 / nextProps.fetchSuggestionsThrushold);
  }
  
  onBlur = e => {
    this.refs.wrapper.focus();
  }

  onFocus = e => {
    this.refs.wrapper.blur();
  }

  handleKeyDown = e => {
    if (e.keyCode === 13 && this.lastEvent === e) {
      this.lastEvent = null;
      return;
    }
    if (!this.props.fromSuggestionsOnly && (this.props.createChipKeys.includes(e.keyCode) || this.props.createChipKeys.includes(e.key))) {
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
        React.cloneElement(this.props.renderChip(chip, this.props.chipTheme), {
          selected: this.state.chipSelected && idx === this.props.value.length - 1,
          onRemove: this.removeChip(idx),
          index: idx,
          key: `chip${idx}`,
        })
      );
    });
  }

  filterUniqueChips = suggestions => {
    let { value, getChipValue, getSuggestionValue } = this.props;

    return suggestions
      .filter(suggestion => !value.some(chip => getChipValue(chip) == getSuggestionValue(suggestion)));
  }

  callFetchSuggestions = (fetchSuggestions, value, canceled) => {
    let { uniqueChips } = this.props;
    
    let callback = suggestions => {
      if(!canceled.isCancaled()){
        this.setState({ 
          loading: false,
          suggestions: (uniqueChips ? this.filterUniqueChips(suggestions) : suggestions)
        });
      }
    }

    let suggestionResult = 
      fetchSuggestions.call(this, value, callback);

    if(suggestionResult && 'then' in suggestionResult){ // To Support Promises
      suggestionResult.then(callback);
    }
  }

  onSuggestionsFetchRequested = ({ value }) => {
    let { uniqueChips, suggestions, fetchSuggestions, suggestionsFilter } = this.props;

    if( fetchSuggestions ){
      this.setState({loading: true});

      this.asyncSuggestLimiter.invoke(fetchSuggestions, value);
    } else {
      this.setState({
        suggestions: (uniqueChips ? this.filterUniqueChips(suggestions) : suggestions).filter(opts => suggestionsFilter(opts, value))
      });
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []})
  }

  onSuggestionSelected = (e, { suggestion }) => {
    this.lastEvent = e;
    this.addChip(suggestion);
    this.setState({ value: '' });
  }

  onChange = (e, { newValue }) => {
    if (!this.props.fromSuggestionsOnly && newValue.indexOf(',') !== -1 && this.props.createChipKeys.includes(9)) {
      let chips = newValue.split(",").map((val) => val.trim()).filter((val) => val !== "");
      chips.forEach(chip => {
        this.addChip(chip)
      });
    } else {
      this.setState({value: newValue});
    }
  }

  render() {

    const { loading, value, suggestions } = this.state;
    const { placeholder, renderLoading } = this.props;
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
          {...this.props}
          theme={this.props.theme}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={val => this.state.value}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
        { loading ? renderLoading() : null }
      </div>
    );
  }
}

Chips.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  theme: PropTypes.object,
  chipTheme: PropTypes.object,
  suggestions: PropTypes.array,
  fetchSuggestions: PropTypes.func,
  fetchSuggestionsThrushold: PropTypes.number,
  fromSuggestionsOnly: PropTypes.bool,
  uniqueChips: PropTypes.bool,
  renderChip: PropTypes.func,
  suggestionsFilter: PropTypes.func,
  getChipValue: PropTypes.func,
  createChipKeys: PropTypes.array,
  getSuggestionValue: PropTypes.func,
  renderSuggestion: PropTypes.func,
  shouldRenderSuggestions: PropTypes.func,
  alwaysRenderSuggestions: PropTypes.bool,
  highlightFirstSuggestion: PropTypes.bool,
  focusInputOnSuggestionClick: PropTypes.bool,
  multiSection: PropTypes.bool,
  renderSectionTitle: PropTypes.func,
  getSectionSuggestions: PropTypes.func,
};

Chips.defaultProps = {
  placeholder: '',
  theme: theme,
  chipTheme: chipTheme,
  suggestions: [],
  fetchSuggestions: null,
  fetchSuggestionsThrushold: 10,
  createChipKeys: [9],
  fromSuggestionsOnly: false,
  uniqueChips: true,
  getSuggestionValue: s => s,
  value: [],
  onChange: () => {},
  renderChip: (value, customTheme) => (<Chip theme={customTheme}>{value}</Chip>),
  renderLoading: () => (<span>Loading...</span>),
  renderSuggestion: (suggestion, { query }) => <span>{suggestion}</span>,
  suggestionsFilter: (opt, val) => opt.toLowerCase().indexOf(val.toLowerCase()) !== -1,
  getChipValue: (item) => item,
};

export default Radium(Chips);
