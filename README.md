# react-chips

## Getting Started

```javascript
import React from 'react';
import { render } from 'react-dom';
import Chips from '../src'

render(
  <Chips />,
document.getElementById('root'))
```

## Chips

|Property|Type|Default|Description|
|--------|----|-------|-----------|
|wrapperStyle|object|Styles.wrapper|Styling for the outer element of this component|
|autoCompleteData|array|[]|Data to fill the autocomplete list with|
|autoCompleteOnly|bool|false|Only allow chips to be added from the autocomplete list|
|uniqueChips|bool|true|Only allow one chip for each object|
|chips|array|[]|Default chips to fill the component with|
|chipStyle|object|Styles.chip|Styling for each chip in the component|

## Styles

This project uses the [Radium](http://stack.formidable.com/radium/) library for styling. You may pass in hover, and focus states to be styles on specified elements.

[Wrapper](#wrapper)
[Chip](#chip)

### Wrapper
```javascript
wrapper: {
  display: "flex",
  position: "relative",
  border: "1px solid #ccc",
  font: "13.33333px Arial",
  minHeight: 24,
  alignItems: "center",
  flexWrap: "wrap",
  padding: "2.5px",
  borderRadius: 5,
}
```

### Chip
Each chip has a default and selected style. When rendering the selected style it will be merged with the default, inheriting any styles it has not overridden.

```javascript
chip: {
  default: {
    padding: 5,
    background: "#ccc",
    margin: "2.5px",
    borderRadius: 3,
    cursor: 'default',
  },
  selected: {
    background: "#888",
  },
}
```
