import React from 'react';
import { render } from 'react-dom'
import Chips from 'react-chips'

let items = ["Java", "Ruby", "Javascript", "C", "C++"]

render(<Chips autoCompleteData={items}/>, document.getElementById("root"));
