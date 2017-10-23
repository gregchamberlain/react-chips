// @flow
import React from 'react';
import type { ChildrenArray, Node, Element } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

import Chip from 'src/Chip';

type Props = {
  onRequestRemoveChip: (index: number) => () => void,
  value: Array<mixed>,
  style: {[string]: mixed},
  children: ChildrenArray<Node>
};

const Chips = ({ value, onRequestRemoveChip, style, children }: Props): React$Node => {
  const chips = value.map((chipValue: mixed, index: number): React$Node => (
    <Chip
      key={index}
      value={String(chipValue)}
      onRequestRemove={onRequestRemoveChip(index)}
      selected={index === 0}
    />
  ));
  return (
    <div style={style}>
      {chips}
      {children}
    </div>
  );
};

Chips.propTypes = {
  onRequestRemoveChip: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  style: PropTypes.object,
  children: PropTypes.node
};

Chips.defaultProps = {
  onRequestRemoveChip: () => {},
  style: {
    position: 'relative',
    border: '1px solid black',
    display: 'inline-block',
    maxWidth: 400
  }
};

export default Chips;