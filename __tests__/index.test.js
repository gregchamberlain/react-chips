import React from 'react';
import { shallow } from 'enzyme';

import Starter from '../src/index';

test('Starter has text', () => {

  const starter = shallow(
    <Starter />
  );

  expect(starter.text()).toEqual('React Component Boilerplate');
  
});