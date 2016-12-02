import React from 'react';
import { render } from 'react-dom'
import Chips, { Chip, Styles } from 'react-chips'

let items = ["Java", "Ruby", "Javascript", "C", "C++"]

render(<Chips suggestions={items}/>, document.getElementById("root"));
