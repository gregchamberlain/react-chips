import React from 'react';

import BasicExample from './basic';
import CustomExample from './custom';
import AsyncExample from './async';

const Root = () => (
  <div>
    <h1>Basic</h1>
    <BasicExample />
    <h1>Custom</h1>
    <CustomExample />
    <h1>Async</h1>
    <AsyncExample />
  </div>
);

export default Root;
