import React from 'react';
import { shallow } from 'enzyme';

import Chips from '../src/Chips';

const minProps = {
  value: [],
  onChange: () => {}
};

test('Renders without exploding', () => {

  const chips = shallow(
    <Chips {...minProps} />
  );

  expect(chips);
  
}); 