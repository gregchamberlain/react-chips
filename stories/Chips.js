import React, { Component } from 'react';
import Chips from '../src';

class ChipsExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chips: []
    };
  }

  updateChips = chips => {
    if (this.props.onChange) {
      this.props.onChange();
    }
    this.setState({ chips });
  }

  render() {
    const { chips } = this.state;
    return (
      <Chips {...this.props} onChange={this.updateChips} value={chips}/>
    );
  }
}

export default ChipsExample;
