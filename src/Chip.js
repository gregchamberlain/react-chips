// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onRequestRemove: () => void,
  selected?: boolean,
  value: string
};

const Chip = ({ value, onRequestRemove, selected }: Props): React$Node => (
  <div style={{...styles.chip, backgroundColor: selected ? '#ccc' : '#eee'}}>
    {value}
    <span onClick={onRequestRemove} style={styles.remove}>&#10006;</span>
  </div>
);

const styles: {
  chip: {[string]: mixed},
  remove: {[string]: mixed}
} = {
  chip: {
    display: 'inline-block',
    margin: 2,
    padding: '2px 4px',
    border: '1px solid #333',
    borderRadius: 2
  },
  remove: {
    cursor: 'pointer',
    marginLeft: 4
  }
};

Chip.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onRequestRemove: PropTypes.func.isRequired
};

export default Chip;