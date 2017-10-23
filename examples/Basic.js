// @flow
import React, { Component } from 'react';

import Chips from 'src';

type Props = {};
type State = {
  value: Array<mixed>,
  inputValue: string
};

class BasicExample extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      value: ['Chip1', 'Chip2', 'Chip3', 'Chip4'],
      inputValue: ''
    };
  }

  onRequestRemove = (index: number): () => void => () => {
    this.setState((state: State): {} => ({
      value: [...state.value.slice(0, index), ...state.value.slice(index + 1)]
    }));
  }

  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  }

  addChip = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.setState((state: State): {} => ({
        value: [...state.value, state.inputValue],
        inputValue: ''
      }));
    }
  }

  render(): React$Node {
    return (
      <div>
        <form onSubmit={this.addChip}>
        <input type="text" value={this.state.inputValue} onChange={this.onChange} />
        <button>Add Chip</button>
        </form>
        <Chips value={this.state.value} onRequestRemoveChip={this.onRequestRemove}/>
      </div>
    );
  }
};

export default BasicExample;