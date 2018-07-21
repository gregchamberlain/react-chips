import React from 'react';

import BasicExample from './basic';
import CustomExample from './custom';
import AsyncExample from './async';
import CustomChipThemeExample from './customChipTheme';

const Root = () => (
  <div>
    <h1>Basic</h1>
    <BasicExample />
    <h1>Custom</h1>
    <CustomExample />
    <h1>Custom Chip Theme</h1>
    <CustomChipThemeExample />
    <h1>Async</h1>
    <AsyncExample />
  </div>
);

export default Root;
