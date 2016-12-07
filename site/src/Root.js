import React from 'react';

import BasicExample from './basic';
import CustomExample from './custom';

const Root = () => (
  <div>
    <h1>Basic</h1>
    <BasicExample />
    <h1>Custom</h1>
    <CustomExample />
  </div>
);

export default Root;
