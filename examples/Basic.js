// @flow
import React, { Component } from 'react';

import Chips, { Input } from 'src';

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

  addChip = (chip: mixed) => {
    this.setState((state: State): {} => ({
      value: [...state.value, chip]
    }));
  }

  render(): React$Node {
    return (
      <Chips value={this.state.value} onRequestRemoveChip={this.onRequestRemove}>
        <Input
          onRequestAddChip={this.addChip}
        />
      </Chips>
    );
  }
};

export default BasicExample;