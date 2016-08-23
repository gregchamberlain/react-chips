import React from 'react';
import { render } from 'react-dom'
import Chips, { Chip, Styles } from 'react-chips'
console.log(Chips)
console.log(Chip)
console.log(Styles)

let items = ["Java", "Ruby", "Javascript", "C", "C++"]

render(<Chips autoCompleteData={items}/>, document.getElementById("root"));
