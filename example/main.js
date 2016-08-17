import React from 'react';
import { render } from 'react-dom';
import Chips from '../src'

render(
  <Chips
  	autoCompleteOnly={true}
  	autoCompleteData={['Ruby', 'Java', 'Javascript', 'Go', 'C++', 'C', 'Swift']}
  	/>,
document.getElementById('root'))
