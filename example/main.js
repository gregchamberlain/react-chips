import React from 'react';
import { render } from 'react-dom';
import Chips, { Chip } from '../src'
import CustomChip from './CustomChip'
import BasicExample from './basic';
import CustomExample from './custom';

render(
  <div>
    <h1>Basic</h1>
    <BasicExample />
    <h1>Custom</h1>
    <CustomExample />
  </div>
,document.getElementById("root"))
