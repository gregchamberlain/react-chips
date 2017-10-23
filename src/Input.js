// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  onChange?: () => void,
  value?: string,
  createChipKeys: Array<string | number>,
  onRequestAddChip: (chip: mixed) => void,
  style: {[string]: mixed}
};

type State = {
  value: string
};

class Input extends Component<Props, State> {

  static defaultProps = {
    onRequestAddChip: () => {},
    createChipKeys: ['Tab', 'Enter'],
    style: {
      outline: 'none',
      border: 'none',
      margin: 2,
      padding: '2px 4px',
      fontSize: 14
    }
  }

  state = {
    value: ''
  }

  value = (): string => {
    return this.props.value || this.state.value;
  }

  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange;
    } else {
      this.setState({ value: e.target.value });
    }
  }

  onKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (this.value() === '' && e.key === 'Backspace') {
    }
    const { createChipKeys } = this.props;
    if (this.value() && createChipKeys.includes(e.key) || createChipKeys.includes(e.keyCode)) {
      e.preventDefault();
      this.props.onRequestAddChip(this.value());
      if (!this.props.onChange) {
        this.setState({ value: '' });
      }
    }
  }

  render(): React$Node {
    return (
      <input
        type="text"
        onChange={this.onChange}
        value={this.value()}
        onKeyDown={this.onKeyDown}
        style={this.props.style}
      />
    );
  }
};

const style: {[string]: mixed} = {
  
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  createChipKeys: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  onRequestAddChip: PropTypes.func.isRequired
};

export default Input;