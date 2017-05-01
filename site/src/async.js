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

class AsyncExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  fetchData(value) {
    return new Promise((resolve, reject) => {

      if(value.length >= 1){

        setTimeout(() => {
          let filtered = data.filter(item => item.startsWith(value));
          resolve(filtered);
        }, 1000);

      } else {
        resolve([]);
      }

    });
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <Chips
        value={this.state.value}
        onChange={this.onChange}
        createChipKeys={[13]}
        placeholder="Type a Programming Language"
        fetchSuggestions={ this.fetchData.bind(this) }
        fetchSuggestionMin={ 3 }
        shouldRenderSuggestions={value => value.length >= 0}
        fromSuggestionsOnly={false} />
    );
  }
}

export default AsyncExample;
