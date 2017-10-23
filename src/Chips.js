// @flow
import React from 'react';
import PropTypes from 'prop-types';

import Chip from 'src/Chip';

type Props = {
  onRequestRemoveChip: (index: number) => () => void,
  value: Array<mixed>,
  style: {[string]: mixed}
};

const Chips = ({ value, onRequestRemoveChip, style }: Props): React$Node => {
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
    </div>
  );
};

Chips.propTypes = {
  onRequestRemoveChip: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  style: PropTypes.object
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