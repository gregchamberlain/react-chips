import React from 'react'
import PropTypes from 'prop-types';
import Radium from 'radium';
import themeable from 'react-themeable';
import { chipTheme } from './theme';

const Chip = ({ selected, theme, onRemove, children }) => {
  const themr = themeable(theme);
  return (
    <div {...themr(1, 'chip', selected  ? 'chipSelected' : '')}>
      {children}
      <span
        {...themr(2, 'chipRemove')}
        onClick={onRemove}> &times;</span>
    </div>
  );
}

Chip.propTypes = {
  theme: PropTypes.object,
  selected: PropTypes.bool,
  onRemove: PropTypes.func,
}

Chip.defaultProps = {
  theme: chipTheme,
  selected: false,
}

export default Radium(Chip);
