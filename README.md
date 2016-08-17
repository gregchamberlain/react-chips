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
|wrapperStyle|object|Styles.wrapper|
|autoCompleteData|array|[]|
|autoCompleteOnly|bool|false|
|uniqueChips|bool|true|
|chips|array|[]|

## Styles

[Wrapper](#wrapper)

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
