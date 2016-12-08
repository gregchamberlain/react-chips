import React, { Component } from 'react';
import Chips, { Chip } from '../../src'

const data = [
  'JavaScript',
  'Ruby',
  'Python',
  'Java',
  'Swift',
  'C++',
  'C',
  'Objective C',
  'Go'
];

class BasicExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  onChange = value => {
    console.log(value);
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        value={this.state.value}
        onChange={this.onChange}
        placeholder="Type a Programming Language"
        suggestions={data}
        fromSuggestionsOnly={false} />
    );
  }
}

export default BasicExample;
