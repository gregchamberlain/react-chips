# react-chips [![npm version](https://badge.fury.io/js/react-chips.svg)](https://badge.fury.io/js/react-chips)

## Getting Started

```
npm install --save react-chips
```

```js
import React from 'react';
import { render } from 'react-dom';
import Chips, { Chip } from '../src'

render(
  <Chips
    suggestions={["Your", "Data", "Here"]}
     />,
document.getElementById('root'))
```

## Chips

|Property|Type|Default|Description|
|--------|----|-------|-----------|
|placeholder|string|n/a|The placeholder to populate the input with|
|theme|object|[theme](src/theme.js)|A [react-themeable](https://github.com/markdalgleish/react-themeable) theme|
|suggestions|array|[]|Data to fill the autocomplete list with|
|fromSuggestionsOnly|bool|false|Only allow chips to be added from the suggestions list|
|uniqueChips|bool|true|Only allow one chip for each object|
|chips|array|[]|Default chips to fill the component with|
|getSuggestionValue|func|val => val|The value to show in the input when a suggestion is selected|
|onChange|func|n/a|A function called when the value of chips changes, passes the chips value as an argument.|
|renderChip|func|utils.renderChip|For custom chip usage. A function that passes the value of the chip as an argument, must return an element that will be rendered as each chip.|
|renderSuggestion|func|utils.renderSuggestion|For custom autocomplete list item usage. A function that passes the value as an argument, must return an element to render for each list item.|
|suggestionsFilter|func|utils.suggestionsFilter|A function that is passed an autoCompleteData item, and the current input value as arguments. Must return a boolean for if the item should be shown.|
|getChipValue|func|utils.getChipValue|A function used to change the value that is passed into each chip.|

## Styles

This project uses [react-themeable](https://github.com/markdalgleish/react-themeable) and  [Radium](http://stack.formidable.com/radium/) for styling. The `Chips`, and default `Chip` components both accept a theme prop. The theme structure, and default theme can be found [here](src/theme.js)

## Custom Chip Component
You may use a custom chip component, simply return the custom component to the renderChip prop function. This component will receive the following additional props from the Chips component.

```js
<Chips
  ...
  renderChip={value => <CustomChip>{value}</CustomChip>}
/>
```

|Property|Type|Description|
|--------|----|-----------|
|selected|bool|A boolean that tells the chip if it is currently selected.|
|onRemove|func|A function to be invoked when the chip should be removed|
