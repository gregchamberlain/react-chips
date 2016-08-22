# react-chips [![npm version](https://badge.fury.io/js/react-chips.svg)](https://badge.fury.io/js/react-chips)

## Getting Started

```js
import React from 'react';
import { render } from 'react-dom';
import Chips, { Chip, Styles } from '../src'

render(
  <Chips
    autoCompleteData={["Your", "Data", "Here"]}
     />,
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
|onChange|func|n/a|A function called when the value of chips changes, passes the chips value as an argument.|
|renderChip|func|utils.renderChip|For custom chip usage. A function that passes the value of the chip as an argument, must return an element that will be rendered as each chip.|
|renderListItem|func|utils.renderListItem|For custom autocomplete list item usage. A function that passes the value and highlighted state as arguments, must return an element to render for each list item.|
|listFilter|func|utils.listFilter|A function that is passed an autoCompleteData item, and the current input value as arguments. Must return a boolean for if the item should be shown.|
|getChipValue|func|utils.getChipValue|A function used to change the value that is passed into each chip.|

## Styles

This project uses the [Radium](http://stack.formidable.com/radium/) library for styling. You may pass in hover, and focus states to be styles on specified elements.

- [Wrapper](#wrapper)
- [Chip](#chip)

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

## Custom Chip Component
You may use a custom chip component, just pass your custom component into the function in renderChip prop. This component will receive the following additional props from the Chips component.

|Property|Type|Description|
|--------|----|-----------|
|selected|bool|A boolean that tells the chip if it is currently selected.|
|onRemove|func|A function to call when the chip should be removed, the index prop must be passed in as an argument.|
|index|number|The index of this chip in the chips array. Pass as an argument calling onRemove prop.|
