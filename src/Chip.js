import React from 'react'
import PropTypes from 'prop-types';
import Radium from 'radium';
import themeable from 'react-themeable';
import { chipTheme } from './theme';

const Chip = ({ selected, theme, onRemove, children }) => {
  // if someone provided a theme, try and merge between the original and provided
  const mergedTheme = deepMerge(chipTheme, theme);
  const themr = themeable(mergedTheme);
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

// from https://stackoverflow.com/a/49798508/1824521
const deepMerge = (...sources) => {
  let acc = {}
  for (const source of sources) {
    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = []
      }
      acc = [...acc, ...source]
    } else if (source instanceof Object) {
      for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
          value = deepMerge(acc[key], value)
        }
        acc = { ...acc, [key]: value }
      }
    }
  }
  return acc
}

export default Radium(Chip);
